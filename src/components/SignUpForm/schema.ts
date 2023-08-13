import * as yup from 'yup'

import { DAYS, YEARS } from '@/constants'
import { Gender } from '@/types'
import { validateEmail, validatePhone } from '@/utils'

const signUpSchema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .required()
    .test('email', (value) => validateEmail(value)),
  phone: yup
    .string()
    .required()
    .test('email', (value) => validatePhone(value)),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)).required(),
  password: yup.string().required(),
  day: yup.string().required().oneOf(DAYS),
  month: yup.number().required(),
  year: yup.string().required().oneOf(YEARS),
})

export { signUpSchema }
