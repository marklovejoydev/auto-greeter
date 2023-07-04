import { useState } from 'react'
import './App.css'

import Greeting from './components/Greeting'
import Header from './components/Header'
import NameChanger from './components/NameChanger'

function App() {
  const [name, setName] = useState("")

  return (
    <>
    <div className='app'>
      <Header  />
      <Greeting username={name} />
      <NameChanger setName={setName} />
    </div>

    </>
  )
}

export default App
