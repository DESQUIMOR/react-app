import logo from './logo.svg';
import './App.css';
import Card from "./components/Card"

function App() {
  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAlign: "center,"
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={miEstilo} className= "catalogo">
          <Card img="/img/playera.jpg" title="Remera" price={800} detail="remera coderhouse"/>
          <Card img="/img/pantalon.jpg" title="Pantalón" price={500} detail="pantalon coderhouse"/>
          <Card img="/img/zapato.jpg" title="Zapatos" price={700} detail="zapatos coderhouse"/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
