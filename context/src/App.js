import React, { useContext } from 'react'
import LoginForm from './components/LoginForm'
import UserContext from './context/UserContext';
import Logged from './components/Logged';
import './App.css';

function App() {
  const { user } = useContext(UserContext)

  return (

    <div className="App">
      {user.auth ? <Logged /> : <LoginForm />}
    </div>
  );
}

export default App;
