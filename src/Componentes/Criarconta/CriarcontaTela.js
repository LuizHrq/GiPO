import React from 'react';
import Header2 from "../HeaderCadastro/HeaderCadastro";
import Footer from '../Footer/Footer';
import EtiquetasHookForm from './CriarConta';

export default function CriarcontaTela(){
    
    return(
        <>
            <Header2/>
            <EtiquetasHookForm/>
            <Footer/>
        </>
    )
}