import * as yup from 'yup'

import { DayAmountInMonth, LONG_MONTHES, TEXT } from '@/constants'

const validateEmail = (email: string | undefined) => {
  return yup.string().email().isValidSync(email)
}

const validatePhone = (phone: string) => {
  const phoneRegExp = /^[\\+][0-9]{10,16}$/
  return yup.string().matches(phoneRegExp).isValidSync(phone)
}

const validateDate = (
  day: number | undefined,
  month: number | undefined,
  year: number | undefined
) => {
  if (!day || !month || !year) {
    return ''
  }

  if (month === 1 && day > DayAmountInMonth.LongFebruary && year % 4 === 0) {
    return `${TEXT.DATE_ERROR}${DayAmountInMonth.LongFebruary}`
  }

  if (month === 1 && day > DayAmountInMonth.ShortFebruary && year % 4 > 0) {
    return `${TEXT.DATE_ERROR}${DayAmountInMonth.ShortFebruary}`
  }

  if (LONG_MONTHES.includes(month)) {
    if (day > DayAmountInMonth.Long) {
      return `${TEXT.DATE_ERROR}${DayAmountInMonth.Long}`
    }
  } else if (month && day > DayAmountInMonth.Short) {
    return `${TEXT.DATE_ERROR}${DayAmountInMonth.Short}`
  }

  return ''
}

export { validateDate, validateEmail, validatePhone }
