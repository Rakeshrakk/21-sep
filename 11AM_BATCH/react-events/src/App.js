import React from 'react';
import './App.css';
import ChangeUserName from "./components/ChangeUserName";

function App() {
  return (
    <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <ChangeUserName/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
