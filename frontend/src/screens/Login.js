import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import { auth, googleProvider } from "../firebase";
import { useHistory } from "react-router-dom";
import axios from "axios";

const testUser = {
  email: "test@example.com",
  password: "testpassword",
};

const Login = ({ location }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const history = useHistory(); // Mantenha a declaração do 'history' aqui
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Fazer a solicitação POST para o servidor JSON usando o axios
    axios.post("http://localhost:5000/api/users", {
      email: email,
      password: password,
    })
    .then((response) => {
      // Se as credenciais estiverem corretas, redirecione para a página de perfil
      history.push("/profile");
    })
    .catch((error) => {
      // Se ocorrer algum erro, exiba a mensagem de erro no console
      console.log("Error logging in:", error.message);
    });
  };

  const handleGoogleLogin = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        // O usuário está agora autenticado com o Google
        // Você pode acessar os dados do usuário usando result.user
        // Por exemplo: const user = result.user;
        history.push("/profile");
      })
      .catch((error) => {
        // Trate o erro de login
        console.log("Error logging in with Google:", error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Criar conta
            </Link>
            </p>
          <button onClick={handleGoogleLogin}>Login with Google</button>
        </form>
      </div>
    </>
  );
};

export default Login;
