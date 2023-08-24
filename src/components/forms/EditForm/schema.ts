import * as yup from 'yup'

import { DAYS, MONTH_NAMES, TEXT, YEARS } from '@/constants'
import { Gender } from '@/types'
import { validateDate } from '@/utils'

const { DATE_ERROR } = TEXT

export const editSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    telegram: yup.string(),
    gender: yup.mixed<Gender>().oneOf(Object.values(Gender)),
    day: yup.string().oneOf(DAYS),
    month: yup.string(),
    year: yup.string().oneOf(YEARS),
    password: yup.string(),
  })
  .test('date', DATE_ERROR, ({ day, month, year }) => {
    if (day === undefined || month === undefined || year === undefined) {
      return false
    } else {
      return (
        validateDate(
          +day,
          MONTH_NAMES.findIndex((name: string) => name === month),
          +year
        ) === ''
      )
    }
  })
