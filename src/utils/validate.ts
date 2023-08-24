import * as yup from 'yup'

import { DayAmountInMonth, LONG_MONTHES, TEXT } from '@/constants'

export const validatePhone = (phone: string) => {
  const phoneRegExp = /^[\\+][0-9]{10,16}$/
  return yup.string().matches(phoneRegExp).isValidSync(phone)
}

export const validateDate = (day: number, month: number, year: number) => {
  const { DATE_ERROR } = TEXT

  if (month === 1 && day > DayAmountInMonth.LongFebruary && year % 4 === 0) {
    return `${DATE_ERROR}${DayAmountInMonth.LongFebruary}`
  }

  if (month === 1 && day > DayAmountInMonth.ShortFebruary && year % 4 > 0) {
    return `${DATE_ERROR}${DayAmountInMonth.ShortFebruary}`
  }

  if (LONG_MONTHES.includes(month)) {
    if (day > DayAmountInMonth.Long) {
      return `${DATE_ERROR}${DayAmountInMonth.Long}`
    }
  } else if (month && day > DayAmountInMonth.Short) {
    return `${DATE_ERROR}${DayAmountInMonth.Short}`
  }

  return ''
}
