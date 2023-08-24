import { Router } from '@/components/Router'
import { GlobalStyles } from '@/styles/global'

import { AppProvider } from './components/AppProvider'

export const App = () => (
  <AppProvider>
    <>
      <GlobalStyles />
      <Router />
    </>
  </AppProvider>
)
