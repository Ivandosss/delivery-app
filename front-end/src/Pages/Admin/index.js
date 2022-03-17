import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../Components/AdmForm/form';
import List from '../../Components/AdmList/list';

import './admin.css'

function AdminPage() {
  function exit() {
    localStorage.clear();
  }
  return (
    <div>
      <header>
        <div className="box-container1">
          <span
            data-testid="customer_products__element-navbar-link-orders"
            className="title"
          >
            GERENCIAR USUÁRIOS
          </span>
        </div>
        <div className="box-container2">
          <span
            data-testid="customer_products__element-navbar-user-full-name"
            className="user"
          >
            Trybeer Admin
          </span>
        </div>
      </header>
      <main className="main-admin">
        <h2 className="new-user">Cadastrar novo usuário</h2>
        <Form />
        <div className="box-container3">
          <Link to="/">
            <button
              type="button"
              data-testid="customer_products__element-navbar-link-logout"
              className="exit"
              onClick={ exit }
            >
              Sair
            </button>
          </Link>
        </div>
      </main>
        <List />
    </div>
  );
}

export default AdminPage;
