import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ROUTES_NAMES } from '@/constants'
import { useTypedDispatch } from '@/hooks'
import { logOut } from '@/store/slices/userSlice'

const Profile: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useTypedDispatch()

  const handleLogOut = () => {
    dispatch(logOut())
    navigate(ROUTES_NAMES.HOME)
  }
  return (
    <div>
      Profile
      <button onClick={handleLogOut}>Log out</button>
    </div>
  )
}

export default Profile
