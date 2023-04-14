
import './Login.css';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import Footer from '../Footer/Footer';


export default function Login (){

    // const [email, setEmail] = useState("");
    // const [login, setLogin] = useState("");
    // const Link = Link();
  
    // function handleLogin() {
    //   const usuario = listaUsuario.find((u) => u.email === email && u.login === login);
    //   if (usuario) {
    //     Link("/inicialuser");
    //   } else {
    //     alert("Dados inválidos");
    //     setEmail("");
    //     setLogin("");
    //   }
    // }


    return(
        <>
        <HeaderLogin/>
            <div className="formulario">
                <form>
                    <h2>LOGIN</h2>
                    <label>E-mail
                      <input type="email" label="E-mail"/>
                    </label>
                    <label>Senha <br></br>
                      <input type="password"/>
                    </label>
    

                    <input type="checkbox" id="confirm"/><label for="confirm">Lembrar meu acesso</label>

                </form>
            </div>
        <Footer/>
        </>
    )
}