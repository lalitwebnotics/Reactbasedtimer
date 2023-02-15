import { useState } from "react";
import "./App.css";
import { Modal } from "./Components/Modal";

function App() {
  const [show, setShow] = useState(false);
  function clickHandler() {
    setShow(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickHandler} className="btn">Open Modal</button>

        <Modal onClose={() => setShow(false)} show={show} />
      </header>
    </div>
  );
}

export default App;
