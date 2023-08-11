import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp } from '@/api/auth'
import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch } from '@/hooks'
import { Gender, User } from '@/types'

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

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
      const user: User = {
        id: '',
        email,
        name: 'Varvara',
        lastName: 'Boro',
        gender: Gender.Woman,
        phone: '1122333',
      }
      await dispatch(signUp({ user, password }))
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
