import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './components/Resume';
import { Route, Routes, ROutes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Navbar />
      <div className='container'></div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about-me" element={<AboutMe />}/>
        <Route path="/portofolio" element={<Portofolio />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
      </Routes>
    </>
  )
}

export default App;