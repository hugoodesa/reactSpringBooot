import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/expenses'>
          Navbar
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link className='nav-link' to='/'>
              Listar Clientes
            </Link>
            <Link className='nav-link' to='/expenses'>
              Cadastrar Cliente
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
