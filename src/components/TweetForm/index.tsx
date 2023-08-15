import { useState } from 'react'

import userImg from '/img/userImg.png'
import { ALT, ICONS, TEXT } from '@/constants'

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

const TweetForm = ({ handleTweet }: { handleTweet?: () => void }) => {
  const [fileName, setFileName] = useState('')
  const [content, setContent] = useState('')

  const handleAddFile = () => {
    document.getElementById('file-input')?.click()
  }

  const handleChooseFile = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(files ? files[0].name : '')
  }

  const handleContentChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(value)
  }

  const handleSubmit = () => {
    console.log(content)
    if (handleTweet) {
      handleTweet()
    }
  }

  return (
    <Container>
      <Img src={userImg} alt={ALT.USER} />
      <Form>
        <Input placeholder="What's happening" onChange={handleContentChange} />
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
            <FileName>{fileName}</FileName>
          </Uploader>
          <Button onClick={handleSubmit}>{TEXT.TWEET_BUTTON}</Button>
        </Buttons>
      </Form>
    </Container>
  )
}

export default TweetForm
