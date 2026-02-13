import React, { useState } from "react";
import XModal from "./XModal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>User Details Modal</h1>

      <button onClick={() => setIsModalOpen(true)}>
        Open Form
      </button>

      <XModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;