import './App.css'

import viteLogo from '/vite.svg'
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <Hello name="Toto" />
    </>
  )
}

export default App
