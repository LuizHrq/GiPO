
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
                    <input type="checkbox" id="confirm"/><label for="confirm">Lembrar meu acesso</label>

                    <div className='botaologar'>
                        <button type="submit">ENTRAR</button>
                    </div>
                </form>
            </div>
        <Footer/>
        </>
    )
}