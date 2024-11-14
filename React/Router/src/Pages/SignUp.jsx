// SignUpForm.js
// import React from "react";
import "./AuthForm.css";

function SignUp() {
  return (
    <div className="auth-form-container">
      <h2>Sign Up</h2>
      <form className="auth-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="auth-submit-btn">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default SignUp;
