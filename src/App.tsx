import { Outlet } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from './components/Navbar/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </ShoppingCartProvider>
  )
}

export default App
