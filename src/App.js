import React from "react";
import "./App.css";

import Card from "./components/Card.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card 
        name='Mathew' 
        age={29}
        desc='Matthew is a musician living in Nashville.'
        friends={22}

        />
      </header>
    </div>
  );
}

export default App;
