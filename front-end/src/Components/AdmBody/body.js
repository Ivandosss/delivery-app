import React from 'react';
import propTypes from 'prop-types';

function Body({ user, index, onClick }) {

  const translate = () => {
    if (user.role === 'seller') return user.role = 'Vendedor'
    if (user.role === 'customer') return user.role = 'Consumidor'
    if (user.role === 'administrato') return user.role = 'Administrador'
    return user.role
  }

  return (
    <tr>
      <td
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { index + 1 }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
      >
        { user.name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
      >
        { user.email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
      >
        { translate() }
      </td>
      <td>
        <button
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          type="button"
          onClick={ () => onClick(user.email) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default Body;

Body.propTypes = {
  user: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};
