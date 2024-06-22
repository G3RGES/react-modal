import { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal />
    </div>
  );
}

export default App;
