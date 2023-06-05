
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
// import Register from './pages/Register/Register';
// import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate.jsx/Autheticate';
import GuestRoute from './utils/GuestRoutes';
import SemiProtectedRoute from './utils/SemiProtectedRoutes'
import ProtectedRoute from './utils/ProtectedRoute';
import Activate from './pages/activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useLoadingWithRefresh } from './hooks/useLoadingWithRefresh';
// import { useState } from 'react';
import Loader from './components/shared/Loader/Loader';
import Room from './pages/Room/Room';
function App() {

  const { loading } = useLoadingWithRefresh()
  // const loading = true
  return (
    loading ? <Loader message="Loading Please Wait...." /> : (
      // Make guest route ---> if logged in than redirect to rooms page.
      < BrowserRouter >
        <Navigation />
        <Routes>
          <Route exact path="/" element={<GuestRoute> <Home /></GuestRoute>} />
          {/* <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} /> */}
          <Route path='/authenticate' element={<GuestRoute><Authenticate /></GuestRoute>} />
          <Route path='/activate' element={<SemiProtectedRoute><Activate /></SemiProtectedRoute>} />
          <Route path='/rooms' element={<ProtectedRoute><Rooms /></ProtectedRoute>} />
          <Route path="/room/:id" element={<ProtectedRoute><Room /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter >
    )
  );
}

export default App;
