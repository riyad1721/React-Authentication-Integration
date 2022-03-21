import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import AuthProvider from './components/context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
