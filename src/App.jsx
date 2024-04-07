import { useState } from 'react'
import './App.scss'
import NavigationDesktop from './Components/NavigationDesktop/NavigationDesktop'
import NavigationMobile from './Components/NavigationMobile/NavigationMobile'

function App() {

  return (
    <>
      <NavigationDesktop/>
      <NavigationMobile />
    </>
  )
}

export default App
