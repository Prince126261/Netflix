import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import NetflixErrorPage from './pages/notfound/Notfound';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate('/')
      } else {
        navigate('/login')
      }
    })
  }, [])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NetflixErrorPage />} />
      </Routes>
    </div>
  )
}

export default App