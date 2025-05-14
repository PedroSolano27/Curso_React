// Aplicativo Principal
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <h1>Context API</h1>
        <Outlet/>
      </main>
    </>
  );
}

export default App;