import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            {/* Link to Contact Page */}
            <div>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
                <h3>Contact</h3>
            </Link>
            </div>
            <p>Copyright Pintereach 2019</p>
        </footer>
    );
};

export default Footer