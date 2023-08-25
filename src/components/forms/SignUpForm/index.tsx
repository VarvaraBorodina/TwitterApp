import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { signUp } from '@/api/auth'
import { Dropdown } from '@/components/dropdowns/Dropdown'
import { PortalDropdown } from '@/components/dropdowns/PortalDropdown'
import { Loader } from '@/components/Loader'
import {
  ALT,
  DAYS,
  IMGS,
  MONTH_NAMES,
  ROUTES_NAMES,
  TEXT,
  YEARS,
} from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import {
  Error,
  Info,
  Input,
  Inputs,
  LogoImg,
  SignUp,
  SubTitle,
  Title,
} from '@/styles/common'
import { Gender, User } from '@/types'

import { signUpSchema } from './schema'
import { Button, Form } from './styled'
import { signUpFormType } from './types'

const { HOME, PROFILE } = ROUTES_NAMES
const {
  CREATE_ACCOUNT,
  USE_EMAIL,
  NAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PHONE_PLACEHOLDER,
  GENDER_PLACEHOLDER,
  DATE_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  BIRTH,
  BIRTH_TEXT,
  SIGN_UP,
} = TEXT

const { LOGO: IMG_LOGO } = IMGS
const { LOGO: ALT_LOGO } = ALT

export const SignUpForm = () => {
  const form = useForm<signUpFormType>({
    resolver: yupResolver(signUpSchema),
  })

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()
  const authError = useTypedSelector((state) => state.user.error)

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form

  const handleDropdownChange = (
    name: keyof signUpFormType,
    newValue: string
  ) => {
    setValue(name, newValue)
    return true
  }

  const submit = (userInfo: signUpFormType) => {
    const { name, lastName, phone, email, password, month, day, year, gender } =
      userInfo
    const monthIndex = MONTH_NAMES.findIndex((name: string) => name === month)
    const user: User = {
      name,
      lastName,
      phone,
      email,
      id: '',
      gender,
      dateOfBirth: new Date(
        Number(year),
        monthIndex,
        Number(day)
      ).toDateString(),
    }
    setLoading(true)
    dispatch(signUp({ user: user, password })).then(({ payload }) =>
      payload ? navigate(PROFILE) : setLoading(false)
    )
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <LogoImg src={IMG_LOGO} alt={ALT_LOGO} />
          <Title>{CREATE_ACCOUNT}</Title>
          <Error>{authError || Object.values(errors)[0]?.message}</Error>
          <Inputs>
            <Input
              placeholder={NAME_PLACEHOLDER}
              type="text"
              {...register('name')}
            />
            <Input
              placeholder={LASTNAME_PLACEHOLDER}
              type="text"
              {...register('lastName')}
            />
          </Inputs>
          <Inputs>
            <Input
              placeholder={EMAIL_PLACEHOLDER}
              type="email"
              {...register('email')}
            />
            <Input
              placeholder={PHONE_PLACEHOLDER}
              type="text"
              {...register('phone')}
            />
          </Inputs>
          <Inputs>
            <Input
              placeholder={PASSWORD_PLACEHOLDER}
              type="password"
              {...register('password')}
            />
            <PortalDropdown
              title={GENDER_PLACEHOLDER}
              options={Object.values(Gender)}
              changeOption={handleDropdownChange}
              name={'gender'}
            />
          </Inputs>
          <SignUp to={HOME}>{USE_EMAIL}</SignUp>
          <SubTitle>{BIRTH}</SubTitle>
          <Info>{BIRTH_TEXT}</Info>
          <Inputs>
            <Dropdown
              title={DATE_PLACEHOLDER[0]}
              options={DAYS}
              changeOption={handleDropdownChange}
              name={'day'}
            />
            <Dropdown
              title={DATE_PLACEHOLDER[1]}
              options={MONTH_NAMES}
              changeOption={handleDropdownChange}
              name={'month'}
            />
            <Dropdown
              title={DATE_PLACEHOLDER[2]}
              options={YEARS}
              changeOption={handleDropdownChange}
              name={'year'}
            />
          </Inputs>
          <Button>{SIGN_UP}</Button>
        </>
      )}
    </Form>
  )
}
