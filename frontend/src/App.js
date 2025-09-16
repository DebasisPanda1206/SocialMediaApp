import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import LayoutPage from './pages/LayoutPage';
import HomePage from './pages/HomePage';
import MessagePage from "./pages/MessagePage";
import ConnectionsPage from './pages/ConnectionsPage'
import DiscoverPage from './pages/DiscoverPage'
import ProfilePage from './pages/ProfilePage'
import ProfilePosts from './components/ProfilePosts';
import { Navigate } from 'react-router-dom';

const App = () => {

  const [isLogged, setIsLogged] = useState(false);

  const ProtectedRoute = ({ isAuthenticated, children }) => {
    return isAuthenticated ? children : <Navigate to={"/login"} />
  }

  function isLoggedIn(val) {
    console.log(val)
    setIsLogged(val.Logged)
  }


  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage checkLogin={isLoggedIn} />}></Route>
        <Route path='/' element={<ProtectedRoute isAuthenticated={isLogged}><LayoutPage /></ProtectedRoute>}>
          <Route index element={<HomePage />}></Route>
          <Route path='' element={<HomePage />}></Route>
          <Route path='message' element={<MessagePage />}></Route>
          <Route path='connections' element={<ConnectionsPage />}></Route>
          <Route path='discover' element={<DiscoverPage />}></Route>
          <Route path='profile' element={<ProfilePage />}>
            <Route index element={<ProfilePosts />}></Route>
            <Route path='' element={<ProfilePosts />}></Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
};

export default App;