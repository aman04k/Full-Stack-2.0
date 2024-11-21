
// import React from "react";
import "./AuthForm.css";


function Login() {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="auth-submit-btn">Login</button>
      </form>
      <p>Don’t have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;
