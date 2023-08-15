import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'

import { auth, db, storage } from '@/api'
import { Post } from '@/types'

const addPost = async (file: File | null, content: string) => {
  if (auth.currentUser) {
    let path = ''

    if (file) {
      const storageRef = ref(
        storage,
        `images/${new Date().getTime()}${file?.name}`
      )

      const { metadata } = await uploadBytes(storageRef, file as Blob)
      path = metadata.fullPath
    }

    const post: Post = {
      id: new Date().getTime().toString(),
      content,
      user: auth.currentUser?.uid,
      usersLiked: [],
      date: new Date().toDateString(),
      imgUrl: path ?? undefined,
    }

    await setDoc(doc(db, 'posts', post.id), post)
    return post
  }
  return null
}

export { addPost }
