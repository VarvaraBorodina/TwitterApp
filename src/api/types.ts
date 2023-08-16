import { User } from '@/types'

type tweetData = {
  file: File | null
  content: string
  user: User
}

type tweetDataToDelete = {
  id: string
  url: string | undefined
}

export type { tweetData, tweetDataToDelete }
