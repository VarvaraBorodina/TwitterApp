import { useState } from 'react'

import userImg from '/img/userImg.png'
import { addTweet } from '@/api/tweets'
import { ALT, ICONS, TEXT } from '@/constants'
import { useTypedSelector } from '@/hooks'
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

const TweetForm = ({ handleTweet }: { handleTweet?: () => void }) => {
  const [file, setFile] = useState<File | null>(null)
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const user = useTypedSelector(({ user }) => user.user) as User

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

  const handleSubmit = () => {
    try {
      if (content) {
        addTweet(file, content, user).then(() => {
          setContent('')
          setFile(null)
          if (handleTweet) {
            handleTweet()
          }
        })
      }
    } catch (error) {
      setError((error as Error).message)
    }
  }

  return (
    <Container>
      <Img src={userImg} alt={ALT.USER} />
      <Form>
        <Input
          placeholder="What's happening"
          onChange={handleContentChange}
          value={content}
        />
        <Error>{error}</Error>
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
          <Button onClick={handleSubmit} disabled={content === ''}>
            {TEXT.TWEET_BUTTON}
          </Button>
        </Buttons>
      </Form>
    </Container>
  )
}

export default TweetForm
