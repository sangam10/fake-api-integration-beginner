/*=====================header==================*/

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-white navbar-light fixed-top'>
            <div className='container'>
                <Link to={'/'} className='navbar-brand'>ReactApi</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse' id='navigation'>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/products/create"}>create</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header