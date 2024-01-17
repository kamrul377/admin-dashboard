
import './App.css'
import Navbar from './components/Navbar'
import SideNav from './components/SideNav.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (
    <div>


      <Navbar />

      <div className="flex flex-5 mt-[70px] w-full h-screen">
        <SideNav />
        <Home />
      </div>




    </div>
  )
}

export default App
