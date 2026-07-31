
import React from "react";
import './styles.scss';

export default function FormularioLogin() {
  return (
    <div className="container-autenticacao">
      <h1 className="title">Login</h1>
      <form className="corpo">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
