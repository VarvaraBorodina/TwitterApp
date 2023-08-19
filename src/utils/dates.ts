const MIN_AGE = 16

const getDays = () => {
  const DAYS = []
  for (let i = 1; i < 32; i++) {
    DAYS.push(String(i))
  }
  return DAYS
}

const getYears = () => {
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

const getAge = (birthDate: Date): number =>
  Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
  )

export { getAge, getDays, getYears }
