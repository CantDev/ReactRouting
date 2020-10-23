import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <ul className="nav nav-pills nav-fill" >
            <li className="nav-item">
                <Link className="nav-link active" to="/home">Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/People">People</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Films"> Films </Link>
            </li>

        </ul>
    )
};

export default Nav