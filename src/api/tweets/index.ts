import { createAsyncThunk } from '@reduxjs/toolkit'
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
import { tweetData, tweetDataToDelete } from '@/api/types'
import { Tweet } from '@/types'

const addTweet = createAsyncThunk(
  'tweets/addTweet',
  async ({ file, content, user }: tweetData) => {
    try {
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
    } catch (error) {
      throw new Error('Unable to add post')
    }
  }
)

const getAllTweets = createAsyncThunk('tweets/getAllTweets', async () => {
  try {
    const tweetsQuery = query(collection(db, 'tweets'), orderBy('date', 'desc'))

    const querySnapshot = await getDocs(tweetsQuery)
    const tweets: Tweet[] = []
    querySnapshot.forEach((doc) => {
      tweets.push(doc.data() as Tweet)
    })
    return tweets
  } catch (error) {
    throw Error('Unable to get tweets')
  }
})

const deleteTweet = createAsyncThunk(
  'tweets/deleteTweet',
  async ({ id, url }: tweetDataToDelete) => {
    try {
      if (url) {
        const desertRef = ref(storage, url)
        await deleteObject(desertRef)
      }
      await deleteDoc(doc(db, 'tweets', id))
      return id
    } catch (error) {
      throw Error('Unable to delete tweet')
    }
  }
)

const toggleLike = createAsyncThunk('tweets/toggleLike', async (id: string) => {
  try {
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
    const updatedTweet: Tweet = { ...tweets[0] }

    if (userId) {
      if (usersLiked.includes(userId)) {
        updatedTweet.usersLiked = usersLiked.filter((user) => user !== userId)
      } else {
        updatedTweet.usersLiked = [...usersLiked, userId]
      }

      await setDoc(doc(db, 'tweets', id), updatedTweet)
    }
    return updatedTweet
  } catch (error) {
    throw Error('Unable to like tweet')
  }
})

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

export { addTweet, deleteTweet, getAllTweets, searchTweet, toggleLike }
