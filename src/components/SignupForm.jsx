import { useState } from "react";
import { useSignIn } from "../services/useSignin";
import Button from "./Button";
import toast from "react-hot-toast";
import { checkPassword } from "../services/usePasswordChecker";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const { signIn, isLoading } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    if (password !== currentPassword) {
      toast.error("The password does not match");

      setCurrentPassword("");
      return;
    }
    console.log(checkPassword("aA123!aa@#$1234"));
    console.log(password);
    if (!checkPassword(password)) {
      toast.error(
        "The passoword should contain atleast one Capitalized letter, one number and one special character(@.#$!%*?&^)"
      );
      return;
    }
    signIn(
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

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-form-container">
          <label className="login-form-container-label">Email address</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            className="login-form-container-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="login-form-container">
          <label className="login-form-container-label">Repeat Password</label>
          <input
            type="password"
            id="current-password"
            autoComplete="current-password"
            className="login-form-container-input"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          />
        </div>
        <div className="login-form-container">
          <Button style="main-btn btn-color-orange">Sign in</Button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
