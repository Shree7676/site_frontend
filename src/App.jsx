import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import SidePanel from './components/SidePanel'
import Landing from './pages/Landing'
import AboutMe from './pages/AboutMe'
import Achievments from './pages/Achievments'
import AddData from './components/AddData'

function App() {

  return (
    <>
      <Router>
        <div className="bg-gray-600 m-0 h-14">
          <Navbar></Navbar>
        </div>
        <div className='flex h-[calc(100vh-3.5rem)]'>
          <div className=" bg-gray-300 w-2/12 ">
            <SidePanel />
          </div>
          <div className='w-11/12 overflow-auto'>
            <Routes>
              <Route path='/projects' element={<Landing />}></Route>
              <Route path='/aboutme' element={<AboutMe />}></Route>
              <Route path='/landing' element={<Landing />}></Route>
              <Route path='/portfolio' element={<Portfolio />}></Route>
              <Route path='/achievments' element={<Achievments />}></Route>
              <Route path='/AddData' element={<AddData />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
