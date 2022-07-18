import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <video src="imagenNav/cafenav.mp4" autoplay="true" muted="true" loop="true"></video>
        <Navbar/>
       
      </header>
    </div>
  );
}

export default App;
