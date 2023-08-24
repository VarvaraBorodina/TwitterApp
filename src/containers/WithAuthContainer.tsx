import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { ROUTES_NAMES } from '@/constants'
import { useTypedSelector } from '@/hooks'

const { HOME } = ROUTES_NAMES

export const WithAuth = () => {
  const user = useTypedSelector((state) => {
    return state.user.user
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate(HOME)
    }
  }, [])

  return <Outlet />
}
