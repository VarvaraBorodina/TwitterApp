import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { logInWithGoogle } from '@/api/auth'
import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch } from '@/hooks'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleOnGoogleLogInClick = async () => {
    try {
      await dispatch(logInWithGoogle())
      navigate(ROUTES_NAMES.PROFILE)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to={ROUTES_NAMES.SIGNUP}>Sign_Up_With_Email</Link>
      <Link to={ROUTES_NAMES.HOME} onClick={handleOnGoogleLogInClick}>
        Sign_Up_With_Google
      </Link>
      <Link to={ROUTES_NAMES.LOGIN}>Log_In</Link>
      <Link to={ROUTES_NAMES.PROFILE}>Profile</Link>
    </div>
  )
}

export default Home
