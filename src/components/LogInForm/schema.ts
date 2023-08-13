import * as yup from 'yup'

import { TEXT } from '@/constants'
import { validateEmail, validatePhone } from '@/utils'

const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required(TEXT.LOGIN_REQUIRED)
    .test('login', TEXT.LOGIN_INVALID, (value) => {
      return validateEmail(value) || validatePhone(value)
    }),
  password: yup.string().required(),
})

export { loginSchema }
