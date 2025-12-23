import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Services from './pages/Services'
import Error from './pages/Error'
import Login from './pages/Login'

export const App = () => {

  return (
<BrowserRouter>
<Header />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
  <Route path="/services" element={<Services />} />
  <Route path="/*" element={<Error />} />
  <Route path="/login" element={<Login />} />
</Routes>
<Footer />
</BrowserRouter>
  )
};
export default App;