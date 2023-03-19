import React from 'react';
import css from './RegisterPage.module.css';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/Authentication/auth.thunk';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      signUp({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registerPage}>
      <h1>PHONEBOOK</h1>
      <form onSubmit={handelSubmit} autoComplete="off">
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">SiGN UP</button>
      </form>
    </div>
  );
};