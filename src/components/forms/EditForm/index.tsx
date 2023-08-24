import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { changePassword, changeUser } from '@/api/user'
import { Dropdown } from '@/components/Dropdown'
import { Loader } from '@/components/Loader'
import { DAYS, MONTH_NAMES, ROUTES_NAMES, TEXT, YEARS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { UserSliceType } from '@/store/slices/types'
import { Error, Input, Inputs, Title } from '@/styles/common'
import { Gender, User } from '@/types'

import { editSchema } from './schema'
import { Button, Form } from './styled'
import { editFormProps, editFormType } from './types'

const { HOME } = ROUTES_NAMES
const {
  EDIT,
  NAME_PLACEHOLDER,
  LASTNAME_PLACEHOLDER,
  TELEGRAM_PLACEHOLDER,
  GENDER_PLACEHOLDER,
  DATE_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  SAVE,
} = TEXT

export const EditForm: React.FC<editFormProps> = ({ showModal }) => {
  const form = useForm<editFormType>({
    resolver: yupResolver(editSchema),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = form

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const { error, loading, user }: UserSliceType = useTypedSelector(
    (state) => state.user
  )

  const date = new Date(user?.dateOfBirth as string)

  useEffect(() => {
    if (user) {
      reset({
        ...user,
        day: date ? String(date.getDate()) : DATE_PLACEHOLDER[0],
        month: date ? MONTH_NAMES[date.getMonth()] : DATE_PLACEHOLDER[1],
        year: date ? String(date.getFullYear()) : DATE_PLACEHOLDER[2],
      })
    } else {
      navigate(HOME)
    }
  }, [])

  const handleDropdownChange = (name: keyof editFormType, newValue: string) => {
    setValue(name, newValue)
    return true
  }

  const submit = (userInfo: editFormType) => {
    if (user) {
      const { name, lastName, month, day, year, gender, telegram, password } =
        userInfo
      const monthIndex = MONTH_NAMES.findIndex((name: string) => name === month)
      const newUser: User = {
        name,
        lastName,
        telegram,
        phone: user.phone,
        email: user.email,
        id: user.id,
        gender,
        dateOfBirth:
          year && month && day
            ? new Date(Number(year), monthIndex, Number(day)).toDateString()
            : user.dateOfBirth,
      }
      dispatch(changeUser(newUser))
      if (password) {
        changePassword(password)
      }
      showModal(false)
    }
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Title>{EDIT}</Title>
        <Error>{error || Object.values(errors)[0]?.message}</Error>
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
            placeholder={TELEGRAM_PLACEHOLDER}
            type="text"
            {...register('telegram')}
          />
          <Dropdown
            title={user?.gender ? Gender[user?.gender] : GENDER_PLACEHOLDER}
            options={Object.values(Gender)}
            changeOption={handleDropdownChange}
            name={'gender'}
          />
        </Inputs>
        <Inputs>
          <Dropdown
            title={date ? String(date.getDate()) : DATE_PLACEHOLDER[0]}
            options={DAYS}
            changeOption={handleDropdownChange}
            name={'day'}
          />
          <Dropdown
            title={date ? MONTH_NAMES[date.getMonth()] : DATE_PLACEHOLDER[1]}
            options={MONTH_NAMES}
            changeOption={handleDropdownChange}
            name={'month'}
          />
          <Dropdown
            title={date ? String(date.getFullYear()) : DATE_PLACEHOLDER[2]}
            options={YEARS}
            changeOption={handleDropdownChange}
            name={'year'}
          />
        </Inputs>
        <Input
          placeholder={PASSWORD_PLACEHOLDER}
          type="password"
          {...register('password')}
        />
        <Button onClick={handleSubmit(submit)}>{SAVE}</Button>
      </Form>
    </>
  )
}
