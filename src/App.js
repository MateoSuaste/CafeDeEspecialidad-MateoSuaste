import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import VideoFondo from "./components/VideoFondo/VideoFondo";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  CartContextProvider  from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { CheckOut } from "./components/CheckOut/CheckOut";


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
                path="/category/:categoryId"
                element={
                  <ItemListContainer greeting="Productos" />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart />
                }
              />
              <Route
                path="/checkOut"
                element={
                  <CheckOut />
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
