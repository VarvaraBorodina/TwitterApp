import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { logInWithEmail, logInWithPhoneNumber } from '@/api/auth'
import { Loader } from '@/components/Loader'
import { ALT, IMGS, ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { resetError } from '@/store/slices/userSlice'
import { Error, LogoImg } from '@/styles/common'

import { loginSchema } from './schema'
import { Button, Form, Input, SignUp, SubTitle } from './styled'
import { loginFormType } from './types'

const { PROFILE, SIGNUP } = ROUTES_NAMES
const {
  LOGIN_HEADER,
  LOGIN_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  LOGIN,
  SIGN_UP,
} = TEXT

const { LOGO: IMG_LOGO } = IMGS
const { LOGO: ALT_LOGO } = ALT

export const LogInForm = () => {
  const form = useForm<loginFormType>({
    resolver: yupResolver(loginSchema),
  })
  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  const error = useTypedSelector((state) => state.user.error)

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const submit = ({ login, password }: loginFormType) => {
    setLoading(true)
    if (login.includes('@')) {
      dispatch(logInWithEmail({ email: login, password })).then(
        ({ payload }) => (payload ? navigate(PROFILE) : setLoading(false))
      )
    } else {
      dispatch(logInWithPhoneNumber({ phone: login, password })).then(
        ({ payload }) => (payload ? navigate(PROFILE) : setLoading(false))
      )
    }
  }

  const resetApiError = () => {
    dispatch(resetError())
  }

  return loading ? (
    <Loader />
  ) : (
    <Form onSubmit={handleSubmit(submit)}>
      <LogoImg src={IMG_LOGO} alt={ALT_LOGO} />

      <SubTitle>{LOGIN_HEADER}</SubTitle>
      <Error>{errors.login?.message}</Error>
      <Input
        placeholder={LOGIN_PLACEHOLDER}
        {...register('login', { onChange: resetApiError })}
        type="text"
      />
      <Error>{errors.password?.message || error}</Error>
      <Input
        placeholder={PASSWORD_PLACEHOLDER}
        {...register('password', { onChange: resetApiError })}
        type="password"
      />
      <Button>{LOGIN}</Button>
      <SignUp to={SIGNUP}>{SIGN_UP}</SignUp>
    </Form>
  )
}
