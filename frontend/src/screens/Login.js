import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import { auth } from "../firebase";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password); // Firebase email/password login
      // The user is now authenticated, no need to call the dispatch(login(email, password)) action.
    } catch (error) {
      // Handle login error
      console.log("Error logging in:", error.message);
    }
  };

  const handleGoogleLogin = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        // The user is now authenticated with Google
        // You can access the user data using result.user
        // For example: const user = result.user;
      })
      .catch((error) => {
        // Handle login error
        console.log("Error logging in with Google:", error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form className="Login col-md-8 col-lg-4 col-11" onSubmit={submitHandler}>
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
            <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
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
