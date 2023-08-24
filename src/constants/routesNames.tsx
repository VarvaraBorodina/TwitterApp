import React from 'react'
export enum ROUTES_NAMES {
  HOME = '/auth',
  FEED = '/',
  LOGIN = '/login',
  SIGNUP = '/sign-up',
  PROFILE = '/profile',
  OTHER = '/other',
}

const { HOME, FEED, LOGIN, SIGNUP, PROFILE } = ROUTES_NAMES

const Home = React.lazy(() =>
  import('@/pages/Home').then(({ Home }) => ({ default: Home }))
)
const LogIn = React.lazy(() =>
  import('@/pages/LogIn').then(({ LogIn }) => ({ default: LogIn }))
)
const SignUp = React.lazy(() =>
  import('@/pages/SignUp').then(({ SignUp }) => ({ default: SignUp }))
)
const Profile = React.lazy(() =>
  import('@/pages/Profile').then(({ Profile }) => ({ default: Profile }))
)
const Feed = React.lazy(() =>
  import('@/pages/Feed').then(({ Feed }) => ({ default: Feed }))
)

export const openRoutes = [
  {
    path: HOME,
    component: <Home />,
  },
  {
    path: LOGIN,
    component: <LogIn />,
  },
  {
    path: SIGNUP,
    component: <SignUp />,
  },
]

export const protectedRoutes = [
  {
    path: PROFILE,
    component: <Profile />,
  },
  {
    path: FEED,
    component: <Feed />,
  },
]
