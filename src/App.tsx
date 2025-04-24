import { useState } from 'react'
import GenerateName from './Components/GenerateName'
import NameDisplay from './Components/NameDisplay'
import './index.css'

function App() {

  const [name, setName] = useState<string>('')

  return (
    <>
    <h1>Absurd-o-tron</h1>
    <GenerateName setName={setName} />
    <NameDisplay name={name} />
    </>
  )
}

export default App
