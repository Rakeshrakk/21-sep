import React from 'react';
import './App.css';
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
        <div className="container mt-4">
            <div className="row">
                <div className="col m-auto">
                    <ConditionalRender/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
