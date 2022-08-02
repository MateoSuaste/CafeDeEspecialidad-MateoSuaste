
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Fondo from "./components/ImgFondo/ImgFondo";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <VideoFondo />
          <Navbar />

        </header>
        <main>
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting="Productos Destacados" />}/>
          <Route path="/origen/:origenId" element={<ItemListContainer greeting="Producto Segun su Origen" />}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          
        </Routes>
        </main>
      </BrowserRouter>
    </div >
  );
}

export default App;