import { HashRouter, Routes, Route } from 'react-router'
import './App.css'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Questionnaire from './components/Questionnaire'

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </HashRouter>
   
  )
}

export default App
