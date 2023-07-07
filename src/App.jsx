import React from 'react'
import TopBar from './components/Topbar'
import Betting from "./components/Betting"
import Display from "./components/Display"

const App = () => {
  return (
    <div>
      <TopBar />
      <div className='max-w-screen-md flex flex-col mx-auto items-center'>
        <Display />
        <Betting />
      </div>
    </div>
  )
}

export default App