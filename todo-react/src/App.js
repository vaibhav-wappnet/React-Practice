
import './App.css';
import { useState, createContext } from 'react';
import ReactSwitch from 'react-switch';
import AddTodoForm from './components/AddTodoForm';

const themeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }


  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="container">
          <div className="switch">
            <label htmlFor="switch">{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <AddTodoForm />
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;