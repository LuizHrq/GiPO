import React from 'react';
// import { useState, useEffect } from 'react';
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';


export default function Login (){

    // //criei um estado para armazenar os usuários
    // const [usuarios, setUsuarios] = useState([])
    //     useEffect(() => {
    //         fetch("http://localhost:8080/GipoApp/rest/usuario").then((resp)=>{
    //             return resp.json();
    //     }).then((resp)=>{
    //             setUsuarios(resp);
    //             console.log(resp);
    //         }).catch((erros)=>{
    //             console.log(erros);
    //         });
    //     },[])


    return(
        <>
        <HeaderLogin/>
            <div className="formulariologin">
                <form>
                    <div className='titulologin'>
                        <h2>LOGIN</h2>
                    </div>
                    
                    <label>E-mail
                    <input type="email"/>
                    </label>
                    <label>Senha
                    <input type="password"/>
                    </label>
                    <br></br>

                    <div className='checkbox'>
                        <input type="checkbox" id="confirm"/>
                    </div>

                    <div className='labelcheckbox'>
                        <label for="confirm">Lembrar meu acesso</label>
                    </div>

                    <div className='botaologar'>
                        <button type="submit">ENTRAR</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )
}