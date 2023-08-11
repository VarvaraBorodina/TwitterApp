import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { ROUTES_NAMES } from '@/constants'
import { useTypedSelector } from '@/hooks'

const WithAuth: React.FC = () => {
  const user = useTypedSelector((state) => {
    console.log('state: ', state)
    return state.user.user
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(ROUTES_NAMES.HOME)
    }
  }, [])

  return <Outlet />
}

export default WithAuth
