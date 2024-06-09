import { Outlet } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Outlet />
      </Container>
    </>
  )
}

export default App
