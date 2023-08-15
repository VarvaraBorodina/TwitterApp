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
import { Gender, User } from '@/types'
import { validateDate } from '@/utils'

import { editSchema } from './schema'
import { Button, Error, Form, Input, Inputs, Title } from './styled'
import { editFormProps, editFormType } from './types'

const EditForm: React.FC<editFormProps> = ({ showModal }) => {
  const form = useForm<editFormType>({
    resolver: yupResolver(editSchema),
  })

  const dispatch = useTypedDispatch()
  const navigate = useNavigate()

  const { error, loading, user }: UserSliceType = useTypedSelector(
    (state) => state.user
  )

  const [dateError, setDateError] = useState<boolean>(false)
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
      navigate(ROUTES_NAMES.HOME)
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
      const isValideDate = validateDate(Number(day), month, Number(year))
      if (isValideDate) {
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
              ? new Date(+year, month, +day).toDateString()
              : user.dateOfBirth,
        }
        dispatch(changeUser(newUser))
        showModal(false)
      } else {
        setDateError(true)
      }
    }
  }

  const handleOnPasswordButton = () => {
    if (password.length < 8) {
      setPasswordError(TEXT.PASSWORD_LENGTH)
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
        <Title>{TEXT.EDIT}</Title>
        <Error>{dateError && TEXT.DATE_ERROR}</Error>
        <Error>
          {error || errors.name?.message || errors.lastName?.message}
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
        <Inputs>
          <Input
            placeholder={TEXT.TELEGRAM_PLACEHOLDER}
            type="text"
            {...register('telegram')}
          />
          <Dropdown
            title={
              user?.gender ? Gender[user?.gender] : TEXT.GENDER_PLACEHOLDER
            }
            options={Object.values(Gender)}
            changeOption={handleGenderChange}
          />
        </Inputs>
        <Inputs>
          <Dropdown
            title={
              user?.dateOfBirth
                ? String(date.getDate())
                : TEXT.DATE_PLACEHOLDER[0]
            }
            options={DAYS}
            changeOption={handleDayChange}
          />
          <Dropdown
            title={
              user?.dateOfBirth
                ? MONTH_NAMES[date.getMonth()]
                : TEXT.DATE_PLACEHOLDER[1]
            }
            options={MONTH_NAMES}
            changeOption={handleMonthChange}
          />
          <Dropdown
            title={
              user?.dateOfBirth
                ? String(date.getFullYear())
                : TEXT.DATE_PLACEHOLDER[2]
            }
            options={YEARS}
            changeOption={handleYearChange}
          />
        </Inputs>
        <Button onClick={handleSubmit(submit)}>{TEXT.SAVE}</Button>
      </Form>
      <Error>{passwordError}</Error>
      <Inputs>
        <Input
          placeholder={TEXT.PASSWORD_PLACEHOLDER}
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Button onClick={handleOnPasswordButton}>{TEXT.CHANGE_PASSWORD}</Button>
      </Inputs>
    </>
  )
}

export default EditForm
