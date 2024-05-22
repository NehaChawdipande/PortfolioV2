import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  return (
    <>
    <div className="container">
      {/* <div style={{ width: "50%", marginTop: "5%" }}> */}
        <h1 className="name">Neha Chawdipande</h1>
      
      {/* </div> */}

      <div className="App">
        <ComingSoon />
      </div>
    </div>
    <h1 className="starter">Ready to create something new?</h1>
    <div className="actionItems">
      <button > Find me here 
        </button>
        <button> What I do
        </button>
        <button> Coming Soon
        </button>
      </div>
    </>
  );
}

export default App;
