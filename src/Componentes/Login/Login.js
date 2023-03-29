import React from 'react';
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import CampoTexto from '../CampoTexto/CampoTexto';
import Footer from '../Footer/Footer';

export default function Login (){

    return(
        <>
        <HeaderLogin/>
            <div className="formulario">
                <form>
                    <h2>LOGIN</h2>
                    <CampoTexto label="Email" placeholder="Digite seu email"/>
                    <CampoTexto label="Senha" type='password' placeholder="Digite sua senha"/>

                    <input type="checkbox" id="confirm"/>Lembrar meu acesso
                    <button type="submit">CADASTRAR</button>

                </form>
            </div>
        <Footer/>
        </>
    )
}