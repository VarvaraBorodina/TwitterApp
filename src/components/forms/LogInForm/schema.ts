import * as yup from 'yup'

import { TEXT } from '@/constants'
import { validateEmail, validatePhone } from '@/utils'

const { LOGIN_REQUIRED, LOGIN_INVALID } = TEXT

const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required(LOGIN_REQUIRED)
    .test('login', LOGIN_INVALID, (value) => {
      return validateEmail(value) || validatePhone(value)
    }),
  password: yup.string().required(),
})

export { loginSchema }
