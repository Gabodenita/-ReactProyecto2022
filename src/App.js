import './App.css';
import NavBar from './components/NavBar';


function App() {

  let titulo= "Bienvenidos a la tienda de QUEEN"
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <h1>{titulo}</h1>
    </div>
  );
}

export default App;
