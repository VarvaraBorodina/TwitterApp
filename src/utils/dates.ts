const MIN_AGE = 16
const SECONDS_PER_YEAR = 3.15576e10

export const getDays = () => {
  const DAYS = []
  for (let i = 1; i < 32; i++) {
    DAYS.push(String(i))
  }
  return DAYS
}

export const getYears = () => {
  const YEARS = []
  for (
    let i = new Date().getFullYear() - MIN_AGE;
    i > new Date().getFullYear() - 100;
    i--
  ) {
    YEARS.push(String(i))
  }
  return YEARS
}

export const getAge = (birthDate: Date): number =>
  Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / SECONDS_PER_YEAR
  )
