import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

import './header.css';
import CartButton from '../CartButton';

function UserHeader({ user }) {
  const history = useHistory();
  return (
    <nav className="main-header">
      <div className="links-header">
        <button>
          <Link
            className="link-customer"
            to="/customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            Produtos
          </Link>
        </button>

        <button>
          <Link
            className="link-customer"
            to="/customer/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            Meus pedidos
          </Link>
        </button>
      </div>
      <h2
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user.name}
      </h2>
      <div className="user-header">

        <CartButton />
        <button
          className="button-quit"
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/login');
          } }
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </div>

    </nav>
  );
}

UserHeader.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired }).isRequired,
};

export default UserHeader;
