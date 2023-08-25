import * as yup from 'yup'

import { DAYS, MONTH_NAMES, TEXT, YEARS } from '@/constants'
import { Gender } from '@/types'
import { validateDate, validatePhone } from '@/utils'

const { DATE_ERROR } = TEXT

export const signUpSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .required()
      .test('phone', (value) => validatePhone(value)),
    gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
    password: yup.string().required(),
    day: yup.string().required().oneOf(DAYS).required(),
    month: yup.string().required(),
    year: yup.string().required().oneOf(YEARS).required(),
  })
  .test({
    test: ({ day, month, year }) => {
      if (day === undefined || month === undefined || year === undefined) {
        return true
      } else {
        return (
          validateDate(
            +day,
            MONTH_NAMES.findIndex((name: string) => name === month),
            +year
          ) === ''
        )
      }
    },
    message: DATE_ERROR,
    name: 'date',
  })
