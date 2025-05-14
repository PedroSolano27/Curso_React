// Página Principal
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import SearchForm from './component/SearchForm';

function App() {
  return (
    <main>
      <h1>React Router</h1>
      <Navbar/>
      <SearchForm/>
      <Outlet/>
      <h2>Footer</h2>
    </main>
  );
}

export default App;