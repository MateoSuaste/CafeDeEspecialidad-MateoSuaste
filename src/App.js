
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const handleOnAdd = (quantity ) =>{
    if(count <stock){
      console.log('Cantidad de items agregados al carrito', quantity)
    }
    else{
      console.log("Stock agotado")
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <video src="imagenNav/cafenav.mp4" autoplay="true" muted="true" loop="true"></video>
        <Navbar/>
        <ItemCount stock={15} inicial={1} onAdd={handleOnAdd}/>
       <ItemListContainer greeting="Hola Mundo" />
      </header>
    </div>
  );
}

export default App;
