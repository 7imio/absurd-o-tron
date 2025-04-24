import { useState } from 'react'
import Footer from './Components/Footer'
import GenerateName from './Components/GenerateName'
import NameDisplay from './Components/NameDisplay'
import './index.css'

function App() {

  const [name, setName] = useState<string>('')

  return (<>
    <div className="app">
    <h1>Absurd-o-tron</h1>
    <GenerateName setName={setName} />
    <NameDisplay name={name} />
    </div>
    <Footer />
  </>
  )
}

export default App
