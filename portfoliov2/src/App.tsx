import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  return (
    <>
    {/* <iframe title="Main" src='https://my.spline.design/spideygirl-44647e4827b92841fce09ab7ce56be6d/' frameBorder='0' style={{
                width: "99vw",
                height: "99vh",
                position: "absolute"
              }}></iframe> */}
      <div className="container">
        <div>
        <h1 className="name">NEHA CHAWDIPANDE</h1>
        <h1 className="starter">Ready to create something new?</h1>
       </div> 

        <div className="App">
    

          {/* <ComingSoon /> */}
      
            <iframe
              src="https://my.spline.design/miniroomcopy-4917653890cf81cc7baddd15a1e972dd/"
              title="splineScene"
              className="splineBlock"
              style={{
                // width: "50vw",
                // height: "50vh",
                // position: "absolute",
                // right: "-5% ",
              }}
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
         
        </div>
      </div>

     
      <div className="actionItems">
        <button> Find me here</button>
        <button> What I do</button>
        <button> Coming Soon</button>
      </div>
    </>
  );
}

export default App;
