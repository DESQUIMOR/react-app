import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola qué tal estás, es un gusto saludarte!!" /><ItemListContainer />
    </div>
  );
}

export default App;
