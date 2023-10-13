import React, { useState } from "react";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [palabra, setPalabra] = useState("");

  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url("https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg")`, backgroundSize: 'cover' }}>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand">Datos Económicos</a>
            <form className="d-flex" role="search">
              <Buscador setPalabra={setPalabra} />       
            </form>
          </div>
        </nav>
      
      
      <MiApi palabra={palabra} />
    </div>
  );
};

export default App;

