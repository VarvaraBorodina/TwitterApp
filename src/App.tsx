import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalThemProvider from '@/components/GlobalThemeProvider'
import Router from '@/components/Router'
import Global from '@/styles/global'

const App: React.FC = () => {
  return (
    <GlobalThemProvider>
      <BrowserRouter>
        <Global />
        <Router />
      </BrowserRouter>
    </GlobalThemProvider>
  )
}

export default App
