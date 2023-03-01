import './App.css';
import VideoBg from "./components/VideoBg";
import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      // setLoading(true);
      setLoading(false);
    }, 3000)

    return () => {
      clearTimeout();
    }
  }, [loading]);

  return (
    <div className="App">
      {
        loading
          ?
          <PacmanLoader className="preloader" color="#f9ff36" size={30} />
          :
          <VideoBg />
      }
    </div>
  );
}

export default App;
