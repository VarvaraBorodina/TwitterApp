import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '@/components/Loader'
import { ROUTES_NAMES } from '@/constants'

const { HOME, FEED, LOGIN, SIGNUP, PROFILE } = ROUTES_NAMES

const Home = React.lazy(() => import('@/pages/Home'))
const LogIn = React.lazy(() => import('@/pages/LogIn'))
const SignUp = React.lazy(() => import('@/pages/SignUp'))
const Profile = React.lazy(() => import('@/pages/Profile'))
const Feed = React.lazy(() => import('@/pages/Feed'))

export const routes = [
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
  {
    path: PROFILE,
    component: <Profile />,
  },
  {
    path: FEED,
    component: <Feed />,
  },
]

const Router = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
    </Routes>
  </Suspense>
)
export default Router
