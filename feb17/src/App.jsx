import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './component/Timer'
import Data from './component/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello, current time is
      </div>

      <h1>
      <Timer />
      </h1>

      <Data />
    </>
  )
}

export default App
