import { 
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home  from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>     
    </div>
  );
}

export default App;
