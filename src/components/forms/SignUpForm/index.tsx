import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import logo from '/img/logo.png'
import { signUp } from '@/api/auth'
import Dropdown from '@/components/Dropdown'
import Loader from '@/components/Loader'
import { ALT, DAYS, MONTH_NAMES, ROUTES_NAMES, TEXT, YEARS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { Gender, User } from '@/types'
import { validateDate } from '@/utils'

import { signUpSchema } from './schema'
import {
  Button,
  Error,
  Form,
  Info,
  Input,
  Inputs,
  LogoImg,
  SignUp,
  SubTitle,
  Title,
} from './styled'
import { signUpFormType } from './types'

const SignUpForm: React.FC = () => {
  const form = useForm<signUpFormType>({
    resolver: yupResolver(signUpSchema),
  })

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  const authError = useTypedSelector((state) => state.user.error)

  const [dateError, setDateError] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = form

  const handleGenderChange = (gender: string) => {
    setValue('gender', gender as Gender)
    return true
  }

  const handleDayChange = (newDay: string) => {
    setDateError(validateDate(+newDay, getValues('month'), +getValues('year')))
    setValue('day', newDay)
    return true
  }

  const handleMonthChange = (newMonth: string) => {
    const monthIndex = MONTH_NAMES.findIndex((name) => name === newMonth)
    setDateError(
      validateDate(+getValues('day'), monthIndex, +getValues('year'))
    )
    setValue('month', monthIndex)
    return true
  }

  const handleYearChange = (newYear: string) => {
    setDateError(validateDate(+getValues('day'), getValues('month'), +newYear))
    setValue('year', newYear)
    return true
  }

  const submit = (userInfo: signUpFormType) => {
    const { name, lastName, phone, email, password, month, day, year, gender } =
      userInfo
    if (!day || !month || !year) {
      setDateError(TEXT.DATE_REQUIRED)
      return
    }
    if (!dateError) {
      const user: User = {
        name,
        lastName,
        phone,
        email,
        id: '',
        gender,
        dateOfBirth: new Date(+year, month, +day).toDateString(),
      }

      dispatch(signUp({ user: user, password })).then(({ payload }) =>
        payload ? navigate(ROUTES_NAMES.PROFILE) : setLoading(false)
      )
    }
  }

  return loading ? (
    <Loader />
  ) : (
    <Form onSubmit={handleSubmit(submit)}>
      <LogoImg src={logo} alt={ALT.LOGO} />
      <Title>{TEXT.CREATE_ACCOUNT}</Title>
      <Error>
        {authError || errors.name?.message || errors.lastName?.message}
      </Error>
      <Inputs>
        <Input
          placeholder={TEXT.NAME_PLACEHOLDER}
          type="text"
          {...register('name')}
        />
        <Input
          placeholder={TEXT.LASTNAME_PLACEHOLDER}
          type="text"
          {...register('lastName')}
        />
      </Inputs>
      <Error>{errors.email?.message || errors.phone?.message}</Error>
      <Inputs>
        <Input
          placeholder={TEXT.EMAIL_PLACEHOLDER}
          type="email"
          {...register('email')}
        />
        <Input
          placeholder={TEXT.PHONE_PLACEHOLDER}
          type="text"
          {...register('phone')}
        />
      </Inputs>
      <Error>{errors.password?.message || errors.gender?.message}</Error>
      <Inputs>
        <Input
          placeholder={TEXT.PASSWORD_PLACEHOLDER}
          type="password"
          {...register('password')}
        />
        <Dropdown
          title={TEXT.GENDER_PLACEHOLDER}
          options={Object.values(Gender)}
          changeOption={handleGenderChange}
        />
      </Inputs>
      <SignUp to={ROUTES_NAMES.HOME}>{TEXT.USE_EMAIL}</SignUp>
      <SubTitle>{TEXT.BIRTH}</SubTitle>
      <Info>{TEXT.BIRTH_TEXT}</Info>
      <Error>
        {errors.day?.message ||
          errors.month?.message ||
          errors.year?.message ||
          dateError}
      </Error>
      <Inputs>
        <Dropdown
          title={TEXT.DATE_PLACEHOLDER[0]}
          options={DAYS}
          changeOption={handleDayChange}
        />
        <Dropdown
          title={TEXT.DATE_PLACEHOLDER[1]}
          options={MONTH_NAMES}
          changeOption={handleMonthChange}
        />
        <Dropdown
          title={TEXT.DATE_PLACEHOLDER[2]}
          options={YEARS}
          changeOption={handleYearChange}
        />
      </Inputs>
      <Button>{TEXT.SIGN_UP}</Button>
    </Form>
  )
}

export default SignUpForm
