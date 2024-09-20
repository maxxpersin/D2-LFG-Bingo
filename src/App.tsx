import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import RaidList from './components/RaidList';

function App() {
  return (
    <div>
      {Navbar()}
      <Outlet />
    </div>
  );
}

export default App
