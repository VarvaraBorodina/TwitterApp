import { getAge, getDays, getYears } from './dates'
import { validateDate, validateEmail, validatePhone } from './validate'

describe('Test utils', () => {
  it('Test getAge 1', () => {
    expect(getAge(new Date(2003, 1, 12))).toBe(20)
  })

  it('Test getAge 2', () => {
    expect(getAge(new Date(1993, 11, 12))).toBe(29)
  })

  it('Test getDays', () => {
    expect(getDays()).toHaveLength(31)
  })

  it('Test getDays', () => {
    expect(getYears()).toHaveLength(100 - 16)
  })

  it('Test invalide email', () => {
    expect(validateEmail('ygysgxdw')).toBeFalsy()
  })

  it('Test valide email', () => {
    expect(validateEmail('ygys@gx.dw')).toBeTruthy()
  })

  it('Test invalide phone', () => {
    expect(validateEmail('ygysgxdw')).toBeFalsy()
  })

  it('Phone without +', () => {
    expect(validatePhone('ygysgxdw')).toBeFalsy()
  })

  it('Test valide phone', () => {
    expect(validatePhone('+3751233444')).toBeTruthy()
  })

  it('Test valid date', () => {
    expect(validateDate(12, 1, 2003)).toBe('')
  })

  it('Test invalid date (february 30)', () => {
    expect(validateDate(30, 1, 2003)).not.toBe('')
  })

  it('Test invalid date (february 29)', () => {
    expect(validateDate(29, 1, 2003)).not.toBe('')
  })

  it('Test valid date (february 29)', () => {
    expect(validateDate(29, 1, 2004)).toBe('')
  })
})
