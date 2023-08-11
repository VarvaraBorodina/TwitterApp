import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { logInWithEmail } from '@/api/auth'
import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch } from '@/hooks'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setEmail(target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setPassword(target.value)
  }

  const handleOnSubmit = async () => {
    try {
      await dispatch(logInWithEmail({ email, password }))
      navigate(ROUTES_NAMES.PROFILE)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <input placeholder="email" value={email} onChange={handleEmailChange} />
      <input
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleOnSubmit}>Log in</button>
    </div>
  )
}

export default SignUpForm
