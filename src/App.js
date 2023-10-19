import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Rendigital from './components/Rendigital';
import Header from './components/Header';

function App() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/rendigital"
          element={
            loggedInUser ? (
              <>
                <Header username={loggedInUser.username} />
                <Rendigital />
              </>
            ) : (
              <LoginForm />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
