import './App.css' 
import Cabecalho from "./components/Cabecalho.jsx"
import Banner from './components/Banner.jsx'
import Rodape from './components/Rodape.jsx'
import Galeria from './components/Galeria.jsx'
import Sobre from './components/Sobre.jsx'
import Time from './components/Time.jsx'
import Parceiros from './components/Parceiros.jsx'
import Blog from './components/Blog.jsx'


function App() {

  return (
    <>
    <Cabecalho /> 
    <Banner />
    <Sobre />
    <Galeria />
    <Blog />
    <Time /> 
    <Parceiros />
    <Rodape /> 
  </>
  )
 }
export default App  