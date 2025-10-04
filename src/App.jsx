import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrintShop from './pages/PrintShop'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/printshop' element={<PrintShop />} />
      </Routes>
    </>
  );
}

export default App
