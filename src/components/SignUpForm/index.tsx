import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import logo from '/logo.svg'
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
  const loading = useTypedSelector((state) => state.user.loading)
  const [dateError, setDateError] = useState<boolean>(false)

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
    setDateError(!validateDate(+newDay, getValues('month'), +getValues('year')))
    setValue('day', newDay)
    return true
  }

  const handleMonthChange = (newMonth: string) => {
    const monthIndex = MONTH_NAMES.findIndex((name) => name === newMonth)
    setDateError(
      !validateDate(+getValues('day'), monthIndex, +getValues('year'))
    )
    setValue('month', monthIndex)
    return true
  }

  const handleYearChange = (newYear: string) => {
    setDateError(!validateDate(+getValues('day'), getValues('month'), +newYear))
    setValue('year', newYear)
    return true
  }

  const submit = (userInfo: signUpFormType) => {
    const { name, lastName, phone, email, password, month, day, year, gender } =
      userInfo
    const user: User = {
      name,
      lastName,
      phone,
      email,
      id: '',
      gender,
      dateOfBirth: new Date(+year, month, +day).toDateString(),
    }

    dispatch(signUp({ user: user, password })).then(
      ({ payload }) => payload && navigate(ROUTES_NAMES.PROFILE)
    )
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
          type="text"
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
        {(errors.day?.message ||
          errors.month?.message ||
          errors.year?.message ||
          dateError) &&
          'Date error'}
      </Error>
      <Inputs>
        <Dropdown title="Day" options={DAYS} changeOption={handleDayChange} />
        <Dropdown
          title="Month"
          options={MONTH_NAMES}
          changeOption={handleMonthChange}
        />
        <Dropdown
          title="Year"
          options={YEARS}
          changeOption={handleYearChange}
        />
      </Inputs>
      <Button>Sign Up</Button>
    </Form>
  )
}

export default SignUpForm
