
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
  };

  return (
    <div className="App">
      <header className="App-header">
        <video
          src="imagenNav/cafenav.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <Navbar />
        <ItemCount stock={10} inicial={1} onAdd={handleOnAdd} />
        <ItemListContainer greeting="Hola Mundo" />
      </header>
    </div>
  );
}

export default App;