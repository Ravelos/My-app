import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Company from './pages/Company'
import ContactUs from './pages/ContactUs'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home />} > </Route>
      <Route path="/company" element={<Company />} > </Route>
      <Route path="/contact" element={<ContactUs />} > </Route>
      </Routes>
      <Footer/>
    </Router>
    
  )
}

export default App;
