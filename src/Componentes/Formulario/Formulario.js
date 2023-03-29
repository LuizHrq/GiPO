import React from 'react';
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import Header2 from "../HeaderCadastro/HeaderCadastro";
import Footer from '../Footer/Footer';

export default function Formulario(){
    
    return(
        <>
            <Header2/>
                {/* <section className="formulario">
                    <form>
                        <h2>CRIE SUA CONTA GiPO</h2>
                        <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                        <CampoTexto label="Email" placeholder="Digite seu email"/>
                        <CampoTexto label="Senha" type='password' placeholder="Digite sua senha"/>
                        <CampoTexto label="Confirmar senha" type='password' placeholder="Confirme sua senha"/>
                        <CampoTexto label="CEP" type="text" placeholder="Informe seu CEP"/>
                        <CampoTexto label="Logradouro" type="text" placeholder="Informe seu logradouro"/>
                        <CampoTexto label="Nº" type="text" placeholder="Informe o número da residência"/>
                        <CampoTexto label="Bairro" type="text" placeholder="Informe seu bairro"/>
                        <CampoTexto label="Cidade" type="text" placeholder="Informe sua cidade"/>
                        <CampoTexto label="UF" type="text" placeholder="Informe seu estado"/>
                        <input type="checkbox" id="confirm"/>Confirmo que as informações são verdadeiras.

                        <button type="submit">CADASTRAR</button>
                    </form>
                </section> */}
            <Footer/>
        </>
    )
}