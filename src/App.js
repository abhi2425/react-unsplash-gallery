import React, { useEffect, useLayoutEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { ThemeProvider } from '@mui/material'
import { theme } from './assets/themes'
import Hero from './components/Hero/Hero'
import Gallery from './components/Gallery/Gallery'
import { useForm, FormProvider } from 'react-hook-form'
import { useGlobalContext } from './context/GlobalContext'

const App = () => {
  const methods = useForm()
  const { theme: toggleTheme, getRandomPics } = useGlobalContext()

  useLayoutEffect(() => {
    document.documentElement.className = toggleTheme
    localStorage.setItem('theme', toggleTheme)
  }, [toggleTheme])

  useEffect(() => {
    getRandomPics()
  }, [getRandomPics])

  return (
    <ThemeProvider theme={theme}>
      <FormProvider {...methods}>
        <main style={{ marginTop: '7.5rem' }}>
          <NavBar />
          <Hero />
          <Gallery />
        </main>
      </FormProvider>
    </ThemeProvider>
  )
}

export default App
