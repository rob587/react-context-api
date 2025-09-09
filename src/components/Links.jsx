import React from 'react'
import { NavLink } from 'react-router-dom'

import { useState } from 'react'


const Links = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick =() => {
        setIsActive(!isActive)
    }
  return (
    <header>
        <div className="container ">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center">
                        <h2>Visita la pagina</h2>
                    </div>
                    <ul className="list-unstyled d-flex justify-content-center mt-3 fs-4">
                        <li className="me-4">
                            <NavLink to="/">Homepage</NavLink>
                        </li>
                        <li className="me-4">
                            <NavLink to="/about">Chi siamo</NavLink>
                        </li>
                        <li className="me-4">
                            <NavLink to="/products">I nostri Prodotti</NavLink>
                        </li>
                        <button className='btn btn-success' onClick={handleClick}>{isActive ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}</button>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Links
