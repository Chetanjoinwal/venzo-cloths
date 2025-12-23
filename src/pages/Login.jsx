import React, { useState } from "react";

const Login = () => {
  // login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginRemember, setLoginRemember] = useState(false);
  const [loginError, setLoginError] = useState("");

  // register state
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  const validateEmail = (email) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!loginEmail.trim() || !validateEmail(loginEmail)) {
      setLoginError("Please enter a valid email.");
      return;
    }
    if (loginPassword.trim().length < 6) {
      setLoginError("Password must be at least 6 characters.");
      return;
    }
    // mock success (replace with real auth)
    setLoginError("");
    console.log("login:", { loginEmail, loginRemember });
    // TODO: call auth API and navigate on success
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegError("");
    setRegSuccess("");
    if (!regEmail.trim() || !validateEmail(regEmail)) {
      setRegError("Please enter a valid email.");
      return;
    }
    if (regPassword.trim().length < 6) {
      setRegError("Password must be at least 6 characters.");
      return;
    }
    // mock register (replace with API)
    setRegSuccess("Registration successful. Please check your email.");
    console.log("register:", { regEmail });
  };

  const handleForgot = (e) => {
    e.preventDefault();
    // TODO: open modal or send reset link
    alert("Password reset flow (implement)");
  };

  return (
    <div className="customer_login">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="account_form">
              <h2>Login</h2>
              <form onSubmit={handleLoginSubmit} noValidate>
                {loginError && <div role="alert" className="form_error">{loginError}</div>}
                <p>
                  <label htmlFor="loginEmail">Username or email <span>*</span></label>
                  <input
                    id="loginEmail"
                    name="loginEmail"
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    aria-required="true"
                    placeholder="you@example.com"
                  />
                </p>
                <p>
                  <label htmlFor="loginPassword">Password <span>*</span></label>
                  <input
                    id="loginPassword"
                    name="loginPassword"
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    aria-required="true"
                    placeholder="••••••••"
                  />
                </p>
                <div className="login_submit">
                  <button type="button" onClick={handleForgot} className="forgot_btn">
                    Lost your password?
                  </button>
                  <label htmlFor="remember">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked={loginRemember}
                      onChange={(e) => setLoginRemember(e.target.checked)}
                    />
                    Remember me
                  </label>
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="account_form register">
              <h2>Register</h2>
              <form onSubmit={handleRegisterSubmit} noValidate>
                {regError && <div role="alert" className="form_error">{regError}</div>}
                {regSuccess && <div role="status" className="form_success">{regSuccess}</div>}
                <p>
                  <label htmlFor="regEmail">Email address <span>*</span></label>
                  <input
                    id="regEmail"
                    name="regEmail"
                    type="email"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                    aria-required="true"
                    placeholder="you@example.com"
                  />
                </p>
                <p>
                  <label htmlFor="regPassword">Password <span>*</span></label>
                  <input
                    id="regPassword"
                    name="regPassword"
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    required
                    aria-required="true"
                    placeholder="At least 6 characters"
                  />
                </p>
                <div className="login_submit">
                  <button type="submit">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
