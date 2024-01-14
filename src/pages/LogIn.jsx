import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

function LogIn() {
  const [signIn, setSignin] = useState(false);
  return (
    <div className="login-container">
      <div>
        <h2>Log in to your account</h2>
        {signIn ? <SignupForm /> : <LoginForm />}
        {/* <SignupForm /> */}
        {/* <LoginForm /> */}
        <button onClick={() => setSignin(oposite => !oposite)}>
          {signIn ? "Log in" : "Sign in"}
        </button>
      </div>
    </div>
  );
}

export default LogIn;
