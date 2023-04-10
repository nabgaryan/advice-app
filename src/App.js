import { useEffect, useState } from "react";
import classes from "./App.module.css";
import matrix from "./assets/matrix.mp4";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const adviceHandler = () => {
    fetchData();
  };

  return (
    <div className={classes.App}>
      <video id={classes.backgroundvideo} autoPlay loop muted>
        <source src={matrix} type="video/mp4" />
      </video>
      <div className={classes.container}>
        <h1>{advice}</h1>
        <button onClick={adviceHandler}>Advice Generator</button>
      </div>
    </div>
  );
}

export default App;
