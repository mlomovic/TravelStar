import React from 'react';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand text-white fw-bold fst-italic" href="index.html"><img src="img/logo.png" alt="" width="50"/> TravelStar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="putovanja.html">Putovanja</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="dashboard.html">Dashboard</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white " href="detalji.html">Detalji</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;