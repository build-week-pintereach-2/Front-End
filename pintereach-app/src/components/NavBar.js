import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <header>
                <h1>Pintereach</h1>
                <nav>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <a>Dashboard</a>
                    </Link> 
                    <Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>
                        <a>Search</a>
                    </Link> 
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                        <a>Profile</a>
                    </Link>    
                </nav>
            </header>
        </div>
    );
};

export default NavBar