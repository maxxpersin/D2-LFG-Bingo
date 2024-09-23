import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import RaidList from './components/RaidList';
import { routes } from './shared/constants/Routes';
import RaidPage from './components/RaidPage';

function App() {
    return (
        <HashRouter basename="/">
            {Navbar()}
            <Routes>
                <Route path={routes.home} element={<RaidList />} />
                <Route path={routes.CROTA} element={<RaidPage />} />
                <Route path={routes.DSC} element={<RaidPage />} />
                <Route path={routes.KF} element={<RaidPage />} />
                <Route path={routes.RON} element={<RaidPage />} />
                <Route path={routes.SAL} element={<RaidPage />} />
                <Route path={routes.VOG} element={<RaidPage />} />
                <Route path={routes.VOW} element={<RaidPage />} />
                <Route path="*" element={<Navigate to={routes.home} />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
