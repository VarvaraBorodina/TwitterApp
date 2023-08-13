import * as yup from 'yup'

import { DayAmountInMonth, LONG_MONTHES } from '@/constants'

const validateEmail = (email: string | undefined) => {
  return yup.string().email().isValidSync(email)
}

const validatePhone = (phone: string) => {
  const phoneRegExp = /^[\\+][0-9]{10,16}$/
  return yup.string().matches(phoneRegExp).isValidSync(phone)
}

const validateDate = (day: number, month: number, year: number) => {
  if (LONG_MONTHES.includes(month)) {
    if (day > DayAmountInMonth.Long) {
      return false
    }
  } else if (month && day > DayAmountInMonth.Short) {
    return false
  }

  if (month === 1 && day > DayAmountInMonth.LongFebruary && year % 4 === 0) {
    return false
  }

  if (month === 1 && day > DayAmountInMonth.ShortFebruary && year % 4 > 0) {
    return false
  }

  return true
}

export { validateDate, validateEmail, validatePhone }
