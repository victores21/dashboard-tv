import React from "react";
import "./login.css";
import VozyLogo from "../../assets/images/vozy-logo.png";

import useControllers from "../../controllers";

const Login = () => {
  const { useScreenHooks } = useControllers();
  const { useLogin } = useScreenHooks();
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    isErrorInForm,
  } = useLogin();

  return (
    <div className="login">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box bg-white p-16 shadow">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-image w-100 d-flex justify-content-center">
              <img src={VozyLogo} alt="" className="w-100 max-w-50" />
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form onSubmit={(event) => handleLogin(event)}>
                  <div className="form-group py-3">
                    <label className="form-control-label ">USERNAME</label>
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="username"
                      onChange={(event) => {
                        setUsername(event.target.value);
                      }}
                      value={username}
                      required
                    />
                  </div>
                  <div className="form-group py-2">
                    <label className="form-control-label  ">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control mt-2"
                      placeholder="Password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                      value={password}
                      required
                    />
                  </div>
                  {isErrorInForm && (
                    <span className="text-danger">Usuario Incorrecto</span>
                  )}

                  <div className="col-lg-12 pt-4 loginbttm">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                    >
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
