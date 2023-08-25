import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Loader } from '@/components/Loader'
import { openRoutes, protectedRoutes, TEXT } from '@/constants'
import { WithAuth } from '@/containers/WithAuthContainer'

const { NOT_FOUND } = TEXT

export const Router = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {openRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route element={<WithAuth />}>
        {protectedRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route path="*" element={<h1>{NOT_FOUND}</h1>} />
    </Routes>
  </Suspense>
)
