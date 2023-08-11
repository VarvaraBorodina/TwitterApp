import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalThemProvider from '@/components/GlobalThemeProvider'
import Router from '@/components/Router'
import Global from '@/styles/global'

import { store } from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalThemProvider>
        <BrowserRouter>
          <Global />
          <Router />
        </BrowserRouter>
      </GlobalThemProvider>
    </Provider>
  )
}

export default App
