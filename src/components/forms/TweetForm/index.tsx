import { useState } from 'react'

import { addTweet } from '@/api/tweets'
import { ALT, ICONS, IMGS, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { TweetButton, UserImg } from '@/styles/common'
import { User } from '@/types'

import {
  Buttons,
  Container,
  FileName,
  Form,
  ImgButton,
  Input,
  Message,
  Uploader,
} from './styled'

const {
  TWEET_CREATED,
  EMPTY_TWEET_ERROR,
  TWEET_FORM_PLACEHOLDER,
  TWEET_BUTTON,
} = TEXT
const { USER_IMG } = IMGS
const { USER } = ALT
const { FILE: FILE_ICON } = ICONS

export const TweetForm = ({
  handleAddedTweet,
}: {
  handleAddedTweet?: () => void
}) => {
  const [file, setFile] = useState<File | null>(null)
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const user = useTypedSelector(({ user }) => user.user) as User
  const dispatch = useTypedDispatch()

  const handleAddFile = () => {
    document.getElementById('file-input')?.click()
  }

  const handleChooseFile = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFile(files ? files[0] : null)
  }

  const handleContentChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(value)
  }

  const handleSubmit = async () => {
    if (content) {
      setError(TWEET_CREATED)
      setTimeout(() => {
        setError('')
      }, 2000)
      await dispatch(addTweet({ file, content, user }))
      setContent('')
      setFile(null)
      if (handleAddedTweet) {
        handleAddedTweet()
      }
    } else {
      setError(EMPTY_TWEET_ERROR)
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  return (
    <Container>
      <UserImg src={USER_IMG} alt={USER} />
      <Form>
        <Input
          placeholder={TWEET_FORM_PLACEHOLDER}
          onChange={handleContentChange}
          value={content}
        />
        <Buttons>
          <Uploader>
            <input
              type="file"
              accept="image/*"
              hidden
              id="file-input"
              onChange={handleChooseFile}
            />
            <ImgButton onClick={handleAddFile} type="button">
              {FILE_ICON}
            </ImgButton>
            <FileName>{file?.name}</FileName>
          </Uploader>
          <TweetButton onClick={handleSubmit}>{TWEET_BUTTON}</TweetButton>
        </Buttons>

        <Message>{error}</Message>
      </Form>
    </Container>
  )
}
