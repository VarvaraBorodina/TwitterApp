import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { changePassword, changeUser } from '@/api/user'
import Dropdown from '@/components/Dropdown'
import Loader from '@/components/Loader'
import { DAYS, MONTH_NAMES, ROUTES_NAMES, TEXT, YEARS } from '@/constants'
import { useTypedDispatch, useTypedSelector } from '@/hooks'
import { UserSliceType } from '@/store/slices/types'
import { Error, Input, Inputs, Title } from '@/styles/common'
import { Gender, User } from '@/types'
import { validateDate } from '@/utils'

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
  CHANGE_PASSWORD,
  PASSWORD_LENGTH,
} = TEXT

const EditForm: React.FC<editFormProps> = ({ showModal }) => {
  const form = useForm<editFormType>({
    resolver: yupResolver(editSchema),
  })

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const { error, loading, user }: UserSliceType = useTypedSelector(
    (state) => state.user
  )

  const [dateError, setDateError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const date = new Date(user?.dateOfBirth as string)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = form

  useEffect(() => {
    if (user) {
      setValue('name', user.name)
      setValue('lastName', user.lastName)
      user.gender && setValue('gender', user.gender)
      user.telegram && setValue('telegram', user.telegram)
      user.gender && setValue('gender', user.gender)

      if (date) {
        setValue('day', String(date.getDate()))
        setValue('month', date.getMonth())
        setValue('year', String(date.getFullYear()))
      }
    } else {
      navigate(HOME)
    }
  }, [])

  const handleGenderChange = (gender: string) => {
    setValue('gender', gender as Gender)
    return true
  }

  const handleDayChange = (newDay: string) => {
    setValue('day', newDay)
    return true
  }

  const handleMonthChange = (newMonth: string) => {
    const monthIndex = MONTH_NAMES.findIndex((name) => name === newMonth)
    setValue('month', monthIndex)
    return true
  }

  const handleYearChange = (newYear: string) => {
    setValue('year', newYear)
    return true
  }

  const submit = (userInfo: editFormType) => {
    if (user) {
      const { name, lastName, month, day, year, gender, telegram } = userInfo
      const validateDateError = validateDate(Number(day), month, Number(year))
      if (!validateDateError) {
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
              ? new Date(Number(year), month, Number(day)).toDateString()
              : user.dateOfBirth,
        }
        dispatch(changeUser(newUser))
        showModal(false)
      } else {
        setDateError(validateDateError)
      }
    }
  }

  const handleOnPasswordButton = () => {
    if (password.length < 8) {
      setPasswordError(PASSWORD_LENGTH)
    } else {
      changePassword(password).then(() => {
        showModal(false)
      })
    }
  }

  const handlePasswordChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    setPassword(value)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Title>{EDIT}</Title>
        <Error>{dateError}</Error>
        <Error>
          {error || errors.name?.message || errors.lastName?.message}
        </Error>
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
            changeOption={handleGenderChange}
          />
        </Inputs>
        <Inputs>
          <Dropdown
            title={
              user?.dateOfBirth ? String(date.getDate()) : DATE_PLACEHOLDER[0]
            }
            options={DAYS}
            changeOption={handleDayChange}
          />
          <Dropdown
            title={
              user?.dateOfBirth
                ? MONTH_NAMES[date.getMonth()]
                : DATE_PLACEHOLDER[1]
            }
            options={MONTH_NAMES}
            changeOption={handleMonthChange}
          />
          <Dropdown
            title={
              user?.dateOfBirth
                ? String(date.getFullYear())
                : DATE_PLACEHOLDER[2]
            }
            options={YEARS}
            changeOption={handleYearChange}
          />
        </Inputs>
        <Button onClick={handleSubmit(submit)}>{SAVE}</Button>
      </Form>
      <Error>{passwordError}</Error>
      <Inputs>
        <Input
          placeholder={PASSWORD_PLACEHOLDER}
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Button onClick={handleOnPasswordButton}>{CHANGE_PASSWORD}</Button>
      </Inputs>
    </>
  )
}

export default EditForm
