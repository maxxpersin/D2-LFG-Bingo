import { HashRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import RaidList from './components/RaidList';
import { routes } from './shared/constants/Routes';

function App() {
  return (
    <HashRouter basename="/">
      {Navbar()}
      <Routes>
        <Route path="home" element={<RaidList />} />
        <Route path="*" element={<Navigate to={routes.home} />} />
      </Routes>
    </HashRouter>
  );
}

export default App
