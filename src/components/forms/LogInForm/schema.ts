import * as yup from 'yup'

import { TEXT } from '@/constants'
import { validatePhone } from '@/utils'

const { LOGIN_REQUIRED, LOGIN_INVALID } = TEXT

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required(LOGIN_REQUIRED)
    .test('login', LOGIN_INVALID, (value) => {
      return yup.string().email().isValidSync(value) || validatePhone(value)
    }),
  password: yup.string().required(),
})
