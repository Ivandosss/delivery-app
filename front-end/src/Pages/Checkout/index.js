import React, { useContext } from 'react';
import ShipDetails from '../../Components/ShipDetails';
import UserCheckoutItem from '../../Components/UserCheckoutItem';
import UserHeader from '../../Components/UserHeader';
import cartContext from '../../Context/cartContext';
import { formatPrice } from '../../utils/format';

import './checkout.css';

function Checkout() {
  const { user } = localStorage;
  const userOBJ = JSON.parse(user);
  const { cart, totalPrice } = useContext(cartContext);
  return (
    <main className="main-checkout">
      <UserHeader user={ userOBJ } />
      <table className="carrinho-table">
        <thead className="carrinho-head">
          <tr className="carrinho-head">
            <th className="carrinho-head-item">Item</th>
            <th className="carrinho-head-item">Descricao</th>
            <th className="carrinho-head-item">Quantidade</th>
            <th className="carrinho-head-item">Valor Unitário</th>
            <th className="carrinho-head-item">Sub-total</th>
            <th className="carrinho-head-item">Remover Item</th>
          </tr>
        </thead>
        <tbody className="carrinho-itens">

          {cart.map((product, index) => (<UserCheckoutItem
            key={ product.id }
            product={ product }
            index={ index }
          />))}
        </tbody>

      </table>
      <div>
        <p
          data-testid="customer_checkout__element-order-total-price"
        >
          {`Total: ${formatPrice(totalPrice)}`}

        </p>
        <ShipDetails />
      </div>
    </main>
  );
}

export default Checkout;
