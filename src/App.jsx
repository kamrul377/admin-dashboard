
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav.jsx'
import Home from './pages/Home'
import Analytics from './pages/Analytics'

function App() {


  return (
    <div>


      <Navbar />

      <div className="flex flex-5 mt-[70px] w-full h-screen">
        <SideNav />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/analytics' element={<Analytics />} />
        </Routes>


      </div>




    </div>
  )
}

export default App
