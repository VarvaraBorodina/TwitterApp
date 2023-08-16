import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { auth, db, storage } from '@/api'
import { Tweet, User } from '@/types'

const addTweet = async (file: File | null, content: string, user: User) => {
  if (auth.currentUser) {
    let path = ''

    if (file) {
      const storageRef = ref(
        storage,
        `images/${new Date().getTime()}${file?.name}`
      )

      const snapshot = await uploadBytes(storageRef, file as Blob)
      path = await getDownloadURL(snapshot.ref)
    }

    const tweet: Tweet = {
      id: new Date().getTime().toString(),
      content,
      user: user.id,
      userName: `${user.name} ${user.lastName}`,
      usersLiked: [],
      date: new Date().getTime(),
      imgUrl: path ?? undefined,
    }

    await setDoc(doc(db, 'tweets', tweet.id), tweet)
    return tweet
  }
  return null
}

const getAllTweets = async () => {
  const tweetsQuery = query(collection(db, 'tweets'))

  const querySnapshot = await getDocs(tweetsQuery)
  const tweets: Tweet[] = []
  querySnapshot.forEach((doc) => {
    tweets.push(doc.data() as Tweet)
  })
  return tweets
}

const getUserTweets = async () => {
  const id = auth.currentUser?.uid
  const tweetsQuery = query(
    collection(db, 'tweets'),
    where('user', '==', id ?? ''),
    orderBy('date', 'desc')
  )

  const querySnapshot = await getDocs(tweetsQuery)
  const tweets: Tweet[] = []
  querySnapshot.forEach((doc) => {
    tweets.push(doc.data() as Tweet)
  })
  return tweets
}

export { addTweet, getAllTweets, getUserTweets }
