import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { logInWithEmail, logInWithPhoneNumber } from '@/api/auth'
import Loader from '@/components/Loader'
import { ALT, IMGS, ROUTES_NAMES, TEXT } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { resetError } from '@/store/slices/userSlice'

import { loginSchema } from './schema'
import { Button, Error, Form, Input, LogoImg, SignUp, SubTitle } from './styled'
import { loginFormType } from './types'

const LogInForm: React.FC = () => {
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
        ({ payload }) =>
          payload ? navigate(ROUTES_NAMES.PROFILE) : setLoading(false)
      )
    } else {
      dispatch(logInWithPhoneNumber({ phone: login, password })).then(
        ({ payload }) =>
          payload ? navigate(ROUTES_NAMES.PROFILE) : setLoading(false)
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
      <LogoImg src={IMGS.LOGO} alt={ALT.LOGO} />

      <SubTitle>{TEXT.LOGIN_HEADER}</SubTitle>
      <Error>{errors.login?.message}</Error>
      <Input
        placeholder={TEXT.LOGIN_PLACEHOLDER}
        {...register('login')}
        type="text"
        onChange={resetApiError}
      />
      <Error>{errors.password?.message || error}</Error>
      <Input
        placeholder={TEXT.PASSWORD_PLACEHOLDER}
        {...register('password')}
        type="password"
        onChange={resetApiError}
      />
      <Button>{TEXT.LOGIN}</Button>
      <SignUp to={ROUTES_NAMES.SIGNUP}>{TEXT.SIGN_UP}</SignUp>
    </Form>
  )
}

export default LogInForm
