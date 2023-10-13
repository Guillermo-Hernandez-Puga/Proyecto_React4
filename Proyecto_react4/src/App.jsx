

import Buscador from "./components/Buscador"
import MiApi from "./components/MiApi"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"



const App = () => {

  return (
    <div className="container mt-5">
      <Navbar/>
      <Buscador  />
      <h1 aria-live="assertive"> Datos Economicos</h1>
      <MiApi />
    </div>
  );
};

export default App;
