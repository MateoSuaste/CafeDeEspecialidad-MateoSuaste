import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video src="imagenNav/cafenav.mp4" autoplay="true" muted="true" loop="true"></video>
        <Navbar/>
       <ItemListContainer greeting="Hola Mundo"/>
      </header>
    </div>
  );
}

export default App;
