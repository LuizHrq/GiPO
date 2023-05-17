import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';

const schema = yup.object({
  email: yup.string().email("Digite um email válido!").required("O campo e-mail é obrigatório!"),
  senha: yup.string().required("A senha é obrigatória!").min(8, "A senha deve ter pelo menos 8 caracteres!"),
});

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  //aparecer placeholder no input de email apenas ao clicar
  // const [showPlaceholder, setShowPlaceholder] = useState(false);
  // const handleFocus = () => {
  //   setShowPlaceholder(true);
  // };
  // const handleBlur = (event) => {
  //   if (event.target.value === "") {
  //     setShowPlaceholder(false);
  //   }
  // };

  function handleLogin(dadosUsuario) {
    // VALIDAR DADOS
    schema
      .validate(dadosUsuario)
      .then(() => {
        console.log("Dados inseridos:", dadosUsuario);
  
        // BUSCAR USUÁRIO NA API
        fetch("http://localhost:8080/GipoApp/rest/usuario", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        })
          .then(function (response) {
            if (response.ok) {
              return response.json(); // Converte a resposta em JSON
            } else {
              throw new Error("Erro ao buscar usuários");
            }
          })
          .then(function (data) {
            const usuarioEncontrado = data.find(
              (usuario) =>
                usuario.email === dadosUsuario.email &&
                usuario.senha === dadosUsuario.senha
            );
            if (usuarioEncontrado) {
              console.log("Usuário autenticado com sucesso!");
              
              const nomeUsuario = usuarioEncontrado.nome;
              localStorage.setItem("nomeUsuario", nomeUsuario);

              alert("Login realizado com sucesso!");
              window.location.href = "/user";

            } else {
              console.log("Dados de login inválidos");
              throw new Error("Dados de login inválidos");
            }
          })
          .catch(function (error) {
            console.log("Erro ao buscar usuários:", error);
            alert("Não foi possível fazer o login. Verifique seus dados e tente novamente.");
          });
      })
      .catch((error) => {
        console.log("Erro ao fazer login:", error);
        alert("Não foi possível fazer o login. Verifique seus dados e tente novamente.");
      });
  }
  
  

    return(
        <>
        <HeaderLogin/>
        <div className="containerCriarconta"> 


            <div className="formulariologin">
            <form onSubmit={handleSubmit(handleLogin)}>

              {/* <form onSubmit={(e) => handleSubmit(e, getValues())} > */}
                <div className='titulologin'>
                    <h2>Login</h2>
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
        </div>
        <Footer/>
        </>
    )
}