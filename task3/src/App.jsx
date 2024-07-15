import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='flex-box-containter'>
      <div className='row'>
        <div className='ones'> 
        </div>
        <div className='three' ></div>
        <div className='twos' ></div>
      </div>
      <div className='row'>
          <div className='outer'></div>
          <div className='middle2'></div>
          <div className='outer'></div>
      </div>
      <div className='row'>
          <div className='ones'></div>
          <div className='three'></div>
          <div className='twos'></div>
      </div>
    </div>
  )
}

export default App
