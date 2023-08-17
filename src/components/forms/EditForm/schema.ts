import * as yup from 'yup'

import { DAYS, YEARS } from '@/constants'
import { Gender } from '@/types'

const editSchema = yup.object().shape({
  name: yup.string().required(),
  lastName: yup.string().required(),
  telegram: yup.string(),
  gender: yup.mixed<Gender>().oneOf(Object.values(Gender)),
  day: yup.string().oneOf(DAYS),
  month: yup.number(),
  year: yup.string().oneOf(YEARS),
})

export { editSchema }
