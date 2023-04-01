import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';


export default function Login (){

    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const history = useHistory();
  
    function handleLogin() {
      const usuario = listaUsuario.find((u) => u.email === email && u.login === login);
      if (usuario) {
        // Redireciona para página InicialUser
        history.push("/inicialuser");
      } else {
        // Exibe mensagem de alerta e limpa campos
        alert("Dados inválidos");
        setEmail("");
        setLogin("");
      }
    }


    return(
        <>
        <HeaderLogin/>
            <div className="formulario">
                <form>
                    <h2>LOGIN</h2>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" value={senha} onChange={(event) => setSenha(event.target.value)} />
    

                    <input type="checkbox" id="confirm"/>Lembrar meu acesso
                    <button type="submit" onClick={handleLogin}>ENTRAR</button>

                </form>
            </div>
        <Footer/>
        </>
    )
}