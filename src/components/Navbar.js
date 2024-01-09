import { Link } from "react-router-dom";
import "../components/Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand custom-font" href="/Home">TECHLIPSE</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Schedule">Schedule</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Coordinators">Coordinators</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
}