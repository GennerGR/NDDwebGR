import './App.css'
import Header from './components/header/Header'
import Advertisements from './components/advertisements/Advertisements'
import ContainerProduct from './components/containerProduct/ContainerProduct'
import InfoStore from './components/infoStore/infoStore'

function App() {
  return (
    <div className='App'>
      <Header />
      <Advertisements />
      <ContainerProduct />
      <InfoStore />
    </div>
  )
}

export default App
