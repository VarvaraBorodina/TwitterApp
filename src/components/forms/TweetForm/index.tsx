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
    await dispatch(addTweet({ file, content, user }))
    setContent('')
    setFile(null)
    if (handleAddedTweet) {
      handleAddedTweet()
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
          <Button onClick={handleSubmit} disabled={content === ''}>
            {TEXT.TWEET_BUTTON}
          </Button>
        </Buttons>
      </Form>
    </Container>
  )
}

export default TweetForm
