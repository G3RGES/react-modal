import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  const modalToggle = () => {
    setModal(!modal);
  };

  return (
    <div className="App">
      <button onClick={modalToggle}>Click Me</button>
      {modal && <Modal modalToggle={modalToggle} />}
    </div>
  );
}

export default App;
