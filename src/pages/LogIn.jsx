import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LogIn() {
  const [signIn, setSignin] = useState(false);
  return (
    <div className="login-container">
      <div>
        <h2>{signIn ? "Sign in" : "Log in"} to your account</h2>
        {signIn ? <SignupForm /> : <LoginForm />}
        <div className="login-container-text">
          <p>{signIn ? "Already a user" : "Create an account"}</p>
          <button
            className="login-container-button main-btn btn-color-orange"
            onClick={() => setSignin(oposite => !oposite)}
          >
            {signIn ? "Log in" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
