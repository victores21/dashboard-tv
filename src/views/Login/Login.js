import React from "react";
import "./login.css";
import VozyLogo from "../../assets/images/vozy-logo.png";

const Login = () => {
  return (
    <div className="login">
      <div class="container vh-100 d-flex justify-content-center align-items-center">
        <div class="row w-100">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box bg-white p-16 shadow">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-image w-100 d-flex justify-content-center">
              <img src={VozyLogo} alt="" className="w-100 max-w-50" />
            </div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group py-3">
                    <label class="form-control-label ">USERNAME</label>
                    <input
                      type="text"
                      class="form-control mt-2"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group py-2">
                    <label class="form-control-label  ">PASSWORD</label>
                    <input
                      type="password"
                      class="form-control mt-2"
                      placeholder="Password"
                    />
                  </div>

                  <div class="col-lg-12 pt-4 loginbttm">
                    <button type="submit" class="btn btn-primary w-100 py-2">
                      LOGIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
