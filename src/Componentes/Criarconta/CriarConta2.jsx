import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './CriarConta.css';

const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Digite um email válido!").required("O e-mail é obrigatório"),
  cpf: yup.string().min(11, "O CPF deve ter pelo menos 11 dígitos!").required("O CPF é obrigatório"),
  senha: yup.string().required("A senha é obrigatória").min(8, "A senha deve ter pelo menos 8 caracteres"),
  confirmaSenha: yup.string().oneOf([yup.ref("senha"), null], "As senhas não coincidem").required("Confirme sua senha"),
});

export default function CriarConta2() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      senha: "",
      confirmaSenha: "",
    },
  });

  function Cadastro(dadosUsuario) {
    //VALIDAR DADOS
    schema.validate(dadosUsuario)
    alert("Cadastro realizado com sucesso!");
    console.log("Dados válidos - Caastro realizado", dadosUsuario);

    //CADASTRAR NA API
    fetch("http://localhost:8080/GipoApp/rest/usuario", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosUsuario),
    })
    //retorna os dados em JSON
      .then(function (response) { //
        return response.json();
      })
      //o que é retornado em JSON é armazenado em dadosUsuario e exibido no console do navegador
      .catch(function (error) {
        console.log(error)
      });
    console.log(dadosUsuario);
  }

  return (
    <div className="containerCadastro"> 

      <div className="formulario">

        <h1 className="tituloformulario">Criar conta</h1>
        <form onSubmit={handleSubmit(Cadastro)}>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" {...register("nome")} />
          {errors.nome && <span>{errors.nome.message}</span>}
          <br></br>

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          <br></br>

          <label htmlFor="cpf">CPF:</label>
          <input type="text" id="cpf" {...register("cpf")} />
          {errors.cpf && <span>{errors.cpf.message}</span>}
          <br></br>

          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" {...register("senha")} />
          {errors.senha && <span>{errors.senha.message}</span>}
          <br></br>

          <label htmlFor="confirmaSenha">Confirmar Senha:</label>
          <input type="password" id="confirmaSenha" {...register("confirmaSenha")} />
          {errors.confirmaSenha && <span>{errors.confirmaSenha.message}</span>}
          
          <div className="button">
            <button type="submit" className="botaocriar">Cadastrar</button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
