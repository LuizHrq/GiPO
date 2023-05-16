import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from '@hookform/error-message';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';


const schema = yup.object({
    email: yup.string().email("Digite um email válido!").required("O e-mail é obrigatório"),
    senha: yup.string().required('A senha é obrigatória').min(8, 'A senha deve ter pelo menos 8 caracteres'),
  });
  
  export default function Login({ history }) {
    const [loginError, setLoginError] = useState(false);
    const { register, getValues, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      defaultValues: {
        email: '',
        senha: '',
      }
    });
  
    function validarCredenciais(dadosUsuario) {
      schema.validate(dadosUsuario)
        .then((validateData) => {
          console.log("Dados válidos", validateData);
          const url = `http://localhost:8080/GipoApp/rest/usuario/login?email=${dadosUsuario.email}&senha=${dadosUsuario.senha}`;
  
          fetch(url)
            .then(function (response) {
              if (!response.ok) {
                setLoginError(true);
                throw new Error("Erro ao fazer login");
              }
              return response.json(); // retorna os dados em JSON
            })
            .then(function (data) {
              console.log(data);
              // redirecionar o usuário para a tela de usuário
              history.push('/user');
            })
            .catch(function (error) {
              console.log(error);
              // tratar o erro aqui, se necessário
              setLoginError(true);
            });
  
        })
        .catch(function (validationError) {
          console.log(validationError.errors);
          // tratar o erro de validação aqui, se necessário
        });
    }
  
    function handleSubmit(data) {
      validarCredenciais(data);
    }


    return(
        <>
        <HeaderLogin/>
            <div className="formulariologin">
            <form onSubmit={(e) => handleSubmit(e, getValues())} >
                    <div className='titulologin'>
                        <h2>LOGIN</h2>
                    </div>
                    
                    <label>E-Mail:<br/>
                        <input type="text"  {...register("email")} name = "email" />
                        <span>{errors.email?.message}</span>
                        <br/>
                    </label>


                    <label>Senha:<br/>
                        <input type="password"  {...register("senha")} name = "senha"/>
                        <span>{errors.senha?.message}</span>
                        <br/>
                    </label>

                    <div className='checkbox'>
                        <input type="checkbox" id="confirm"/>
                    </div>

                    <div className='labelcheckbox'>
                        <label for="confirm">Lembrar meu acesso</label>
                    </div>

                    <div className="button">
                      <button type="submit" className="botaocriar">ENTRAR</button>
                    </div>

                </form>
            </div>
        <Footer/>
        </>
    )
}