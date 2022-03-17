import React, { useEffect, useState } from 'react';
import SellerHeader from '../../Components/SellerHeader';
import SellerSaleCard from '../../Components/SellerSaleCard';
import { getBackEndRequest } from '../../utils/requests';

import './seller.css';

function SellerSales() {
  const [sales, setSales] = useState([]);
  const user = JSON.parse(localStorage.user);
  useEffect(() => {
    const setTheSales = async () => {
      const salesToSet = await getBackEndRequest(`/sales/seller/${user.id}`);
      setSales(salesToSet);
    };
    setTheSales();
  }, [user.id]);
  return (
    <main>
      <SellerHeader user={ user } />
      <div className="sales-cards">
        {sales.length === 0 ? 'Loading...' : sales.map((sale, index) => (
        <SellerSaleCard sale={ sale } key={ sale.id } index={ index } />))}
      </div>
    </main>
  );
}

export default SellerSales;
