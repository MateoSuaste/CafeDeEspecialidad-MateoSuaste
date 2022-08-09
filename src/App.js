import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  CartContextProvider  from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <VideoFondo />
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer greeting="Productos Destacados" />}
              />
              <Route
                path="/origen/:origenId"
                element={
                  <ItemListContainer greeting="Producto Segun su Origen" />
                }
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
          </main>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
