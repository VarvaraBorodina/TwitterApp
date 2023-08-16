import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage'

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

const deleteTweet = async (id: string, url: string | undefined) => {
  if (url) {
    const desertRef = ref(storage, url)
    await deleteObject(desertRef)
  }
  await deleteDoc(doc(db, 'tweets', id))
}

const toggleLike = async (id: string) => {
  const userId = auth.currentUser?.uid
  const tweetsQuery = query(
    collection(db, 'tweets'),
    where('id', '==', id ?? '')
  )

  const querySnapshot = await getDocs(tweetsQuery)
  const tweets: Tweet[] = []
  querySnapshot.forEach((doc) => {
    tweets.push(doc.data() as Tweet)
  })

  const { usersLiked } = tweets[0]
  const updatedTweets = { ...tweets[0] }

  if (userId) {
    if (usersLiked.includes(userId)) {
      updatedTweets.usersLiked = usersLiked.filter((user) => user !== userId)
    } else {
      updatedTweets.usersLiked = [...usersLiked, userId]
    }

    await setDoc(doc(db, 'tweets', id), updatedTweets)
  }
  return updatedTweets
}

const searchTweet = async (search: string) => {
  const end = search.replace(/.$/, (c) =>
    String.fromCharCode(c.charCodeAt(0) + 1)
  )

  const tweetsQuery = query(
    collection(db, 'tweets'),
    where('content', '>=', search),
    where('content', '<', end)
  )

  const querySnapshot = await getDocs(tweetsQuery)
  const tweets: Tweet[] = []
  querySnapshot.forEach((doc) => {
    tweets.push(doc.data() as Tweet)
  })

  return tweets
}

export {
  addTweet,
  deleteTweet,
  getAllTweets,
  getUserTweets,
  searchTweet,
  toggleLike,
}
