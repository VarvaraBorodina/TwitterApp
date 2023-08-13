import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Loader from '@/components/Loader'
import { ROUTES_NAMES } from '@/constants'
import { WithAuthContainer } from '@/containers'

const { HOME, FEED, LOGIN, SIGNUP, PROFILE } = ROUTES_NAMES

const Home = React.lazy(() => import('@/pages/Home'))
const LogIn = React.lazy(() => import('@/pages/LogIn'))
const SignUp = React.lazy(() => import('@/pages/SignUp'))
const Profile = React.lazy(() => import('@/pages/Profile'))
const Feed = React.lazy(() => import('@/pages/Feed'))

const openRoutes = [
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

const protectedRoutes = [
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
      {openRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route element={<WithAuthContainer />}>
        {protectedRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  </Suspense>
)
export default Router
