import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './register.css';

function RegisterPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();

  const http = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 30000,
  });

  const validateEmail = () => {
    const emailIsValid = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    if (email) {
      const enable = emailIsValid.test(email);
      return enable;
    }
    return false;
  };

  const validateName = () => {
    const min = 12;
    if (name) {
      return name.length >= min;
    }
    return false;
  };

  const validatePassword = () => {
    const min = 6;
    if (password) {
      return password.length >= min;
    }
    return false;
  };

  const handleClick = async () => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const res = await http.post('/users', body);
      console.log(res);
      history.push('/customer/products');
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error.message);
    }
  };

  return (
    <main className="main">
      <h1 className="title">
        Cadastro
      </h1>
      <form className="form-register">
        <label className="label-register" htmlFor="name">
          Nome:
          <input
            className="input"
            name="name"
            type="text"
            value={ name }
            onChange={ (input) => setName(input.target.value) }
            data-testid="common_register__input-name"
            placeholder="seu nome"
          />
        </label>
        <label className="label-register" htmlFor="email">
          Email:
          <input
            className="input"
            name="email"
            type="email"
            value={ email }
            onChange={ (input) => setEmail(input.target.value) }
            data-testid="common_register__input-email"
            placeholder="email@email.com"
          />
        </label>
        <label className="label-register" htmlFor="password">
          Senha:
          <input
            className="input"
            name="password"
            type="password"
            value={ password }
            onChange={ (input) => setPassword(input.target.value) }
            data-testid="common_register__input-password"
            placeholder="* * * * * * * * * *"
          />
        </label>
        <button
          className="button-container"
          disabled={ !(validatePassword() && validateEmail() && validateName()) }
          type="button"
          onClick={ () => handleClick() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      <span
        data-testid="common_register__element-invalid_register"
        className="error"
      >
        { errorMessage }
      </span>
    </main>
  );
}

export default RegisterPage;
