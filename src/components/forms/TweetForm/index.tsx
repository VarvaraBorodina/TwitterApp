import { useState } from 'react'

import userImg from '/img/userImg.png'
import { addTweet } from '@/api/tweets'
import { ALT, ICONS, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { User } from '@/types'

import {
  Button,
  Buttons,
  Container,
  Error,
  FileName,
  Form,
  Img,
  ImgButton,
  Input,
  Uploader,
} from './styled'

const TweetForm = ({ handleAddedTweet }: { handleAddedTweet?: () => void }) => {
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
      setError(TEXT.TWEET_CREATED)
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
      setError(TEXT.EMPTY_TWEET_ERROR)
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  return (
    <Container>
      <Img src={userImg} alt={ALT.USER} />
      <Form>
        <Input
          placeholder={TEXT.TWEET_FORM_PLACEHOLDER}
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
              {ICONS.file}
            </ImgButton>
            <FileName>{file?.name}</FileName>
          </Uploader>
          <Button onClick={handleSubmit}>{TEXT.TWEET_BUTTON}</Button>
        </Buttons>

        <Error>{error}</Error>
      </Form>
    </Container>
  )
}

export default TweetForm
