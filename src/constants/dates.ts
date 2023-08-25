import { getDays, getYears } from '@/utils'

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const DAYS = getDays()

export const YEARS = getYears()

export const LONG_MONTHES = [0, 2, 4, 6, 7, 9, 11]

export enum DayAmountInMonth {
  ShortFebruary = 28,
  LongFebruary = 29,
  Short = 30,
  Long = 31,
}
