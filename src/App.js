
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Fondo from "./components/ImgFondo/ImgFondo";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">
        <VideoFondo/>
        <Navbar />
        
      </header>
      <main>
      
      <ItemListContainer greeting="Productos Destacados" />
     { <ItemDetailContainer/> }
      </main>
    </div>
  );
}

export default App;