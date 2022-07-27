
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import Fondo from "./components/ImgFondo/ImgFondo";
import VideoFondo from "./components/VideoFondo/VideoFondo";

function App() {
  const handleOnAdd = (quantity) => {
    console.log("Cantidad de items agregados al carrito", quantity);
  };

  return (
    <div className="App">
      <header className="App-header">
        <VideoFondo/>
        <Navbar />
       { /*<ItemCount stock={10} inicial={1} onAdd={handleOnAdd} />*/}
      </header>
      <main>
      
      <ItemListContainer greeting="Productos Destacados" />
      </main>
    </div>
  );
}

export default App;