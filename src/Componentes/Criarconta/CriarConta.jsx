import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './CriarConta.css';


const schema = yup.object({
    nome : yup.string().required("O nome é obrigatório"),
    email : yup.string().email("Digite um email válido!").required("O e-mail é obrigatório"),
    cpf : yup.string().min(11,"O CPF deve ter pelo menos 11 dígitos!").required("O CPF é obrigatório"),
    senha: yup.string().required('A senha é obrigatória').min(8, 'A senha deve ter pelo menos 8 caracteres'),
    confirmaSenha: yup.string().oneOf([yup.ref('senha'), null], 'As senhas não coincidem').required('Confirme sua senha')
}).required();

export default function CriarConta(){

    const {register, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues:{
            nome: '',
            email: '',
            cpf: '',
            senha: '',
            confirmaSenha: '',
        }
    });


    //CADASTRAR NA API
    function Cadastro(dadosUsuario){
        schema.validate(dadosUsuario)
        .then((validateData) => {
            console.log("Dados válidos", validateData);
            fetch('http://localhost:8080/GipoApp/rest/usuario',{
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(dadosUsuario)
            })
            .then(function (response) {
                return response.json(); //retorna os dados em json
            })
            .catch(function (error){
                console.log(error)
            });
        })
        .catch((err) => {
            console.log("Dados inválidos", err);
            alert("Dados inválidos");
        });
        console.log(errors);
        console.log(dadosUsuario)
        

    }
    console.log(errors);


    //ESSE BLOCO DE CÓDIGO É PARA PEGAR OS DADOS DO FORMULÁRIO
    const handleSubmit = (e, data) =>{
        e.preventDefault();
        // console.log(data.nome);
        Cadastro(data);
    }

    return(
        <>
            <div className='formulario'>

                <form onSubmit={(e) => handleSubmit(e, getValues())} >

                    <div className='tituloformulario'>
                        <h2>CRIE SUA CONTA GiPO</h2>
                    </div>
                    <div className='dadospessoais'>
                        <fieldset>
                        <legend>Dados Pessoais</legend>

                            <label>Nome:<br/>
                                <input type="text" {...register("nome")} name = "nome"/>
                                <span>{errors.nome?.message}</span><br/>
                            </label>

                            <label>E-Mail:<br/>
                                <input type="text"  {...register("email")} name = "email" />
                                <span>{errors.email?.message}</span><br/>
                            </label>
                        
                            <label>CPF:<br/>
                                <input type="text"  {...register("cpf")} name = "cpf" />
                                <span>{errors.cpf?.message}</span>
                                <br/>
                            </label>

                            <label>Senha:<br/>
                                <input type="password"  {...register("senha")} name = "senha"/>
                                <span>{errors.senha?.message}</span><br/>
                            </label>

                            <label>Confirme a senha:<br/>
                                <input type="password"  {...register("confirmaSenha")} name = "confirmaSenha" />
                                <span>{errors.confirmaSenha?.message}</span><br/>
                            </label>
                        </fieldset>
                    </div>
                <div className='botaocriar'>
                    <button type="submit">CRIAR</button>
                </div>
                </form>
            </div>
        </>
    )
}