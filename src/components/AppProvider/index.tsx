import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/components/ErrorBoundary'
import { GlobalThemProvider } from '@/components/GlobalThemeProvider'
import { store } from '@/store'

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GlobalThemProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </GlobalThemProvider>
      </Provider>
    </ErrorBoundary>
  )
}
