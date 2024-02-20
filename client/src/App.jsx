import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={< Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/signup' element={< SignUp />}></Route>
        <Route path='/signout' element={< SignOut />}></Route>
      </Routes>
    </BrowserRouter>
  )
}