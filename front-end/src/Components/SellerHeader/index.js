import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import propTypes from 'prop-types';

function UserHeader({ user }) {
  const history = useHistory();
  return (
    <nav className="seller-header">
      <button>
        <Link
          className="link-pedidos"
          to="/seller/orders"
          data-testid="customer_products__element-navbar-link-orders"
        >
          PEDIDOS

        </Link>
      </button>

      <div
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </div>

      <button
        type="button"
        onClick={ () => {
          localStorage.clear();
          history.push('/login');
        } }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair

      </button>
    </nav>
  );
}

UserHeader.propTypes = {
  user: propTypes.shape({
    name: propTypes.string.isRequired }).isRequired,
};

export default UserHeader;
