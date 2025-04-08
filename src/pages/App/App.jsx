import React from 'react'

import Layout from '../../components/Layout'

import { AppProvider } from '../../context/AppProvider'

import './App.css'

function App() {


  return (
    <>
      <React.StrictMode>
        <AppProvider>
          <Layout />
        </AppProvider>
      </React.StrictMode>
    </>
  )
}

export default App
