import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { login } from "../services/apiAuth";
import toast from "react-hot-toast";
import { useLogin } from "../services/useLogin";

function LoginForm() {
  const [email, setEmail] = useState(import.meta.env.VITE_USER_NAME);
  const [password, setPassword] = useState(import.meta.env.VITE_USER_PASS);
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      {
        email,
        password,
      },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }
  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }

  //   const [error, setError] = useState(null);
  //   const navigate = useNavigate();

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     try {
  //       if (!email || !password) {
  //         setError("Email and password are required");
  //         return;
  //       }
  //       await login({ email, password });
  //       navigate("/");
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   }

  function handleInputChange(e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-container">
          <label className="login-form-container-label">Email address</label>
          <input
            type="email"
            id="email"
            autoComplete="username"
            className="login-form-container-input"
            value={email}
            onChange={handleInputChange}
            disabled={isLoading}
          />
        </div>
        <div className="login-form-container">
          <label className="login-form-container-label">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            className="login-form-container-input"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="login-form-container">
          <Button style="main-btn btn-color-orange">Log in</Button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
