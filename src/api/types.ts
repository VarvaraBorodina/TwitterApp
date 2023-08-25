import { User } from '@/types'

export type tweetData = {
  file: File | null
  content: string
  user: User
}

export type tweetDataToDelete = {
  id: string
  url: string | undefined
}
