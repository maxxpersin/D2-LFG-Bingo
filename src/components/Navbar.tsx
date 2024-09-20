import { Link } from "react-router-dom"
import { routes } from "../shared/constants/Routes"

function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light">
            <div className="container-fluid">
                <div className="navbar-brand">Destiny 2 LFG Bingo</div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={routes.home} className="nav-link">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar