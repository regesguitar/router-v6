import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';


function App() {
  return (
    <div className="App">

      <Router>
        <nav>
          <Link to ='/'>Home</Link>
          <Link to ='/profile'>Profile</Link>
          <Link to= '/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <div>Footer</div>
      </Router>

    </div>
  );
}

export default App;
