import logo from './Designer.jpg';
import './App.css';

function Catalog() {
    return (
        <div className="catalog">
            <h3>Catalogó</h3>
        </div>
    )
}

function Fallow() {
    return (
        <div className="fallow">
            <h3>Segimiento de pedidos</h3>
        </div>
    )
}

function Notifications() {
    return (
        <div className="notifications">
            <h3>Notificaciones</h3>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
                  Tienda <code id="mi-parrafo"> Los Robles</code> en linea. </h1>
               
          </header>
          
          <Catalog/>
          <Fallow />
          <Notifications/>
          
    </div>
  );
}

export default App;
