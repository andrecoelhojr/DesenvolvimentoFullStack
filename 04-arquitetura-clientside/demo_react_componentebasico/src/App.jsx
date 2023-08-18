import './App.css'
import { AloMundo } from '../components/AloMundo'
import { AloMundoColorido } from '../components/AloMundoColorido'
import { Contador } from '../components/Contador'
import { ContadorReducer } from '../components/ContadorReducer'

function App() {
  return (
    <>
      <AloMundo />
      <AloMundoColorido nome="André Coelho" cor="red" />
      <Contador />
      <ContadorReducer />
    </>
  )
}

export default App
