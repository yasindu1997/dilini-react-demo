import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Pricing from './Pages/Pricing/Pricing';
import Features from './Pages/Features/Features';
import Navbar from './components/NavBar/Navbar';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="features" element={<Features />} />
      </Routes>
    </div>
  );
}

export default App;
