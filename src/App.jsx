import React from 'react'
import TopBar from './components/Topbar'
import Betting from "./components/Betting"
import Display from "./components/Display"
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-sm relative flex flex-col mx-auto items-center'>
        <Display />
        <Betting />
      </div>
      <Footer />
    </div>
  )
}

export default App