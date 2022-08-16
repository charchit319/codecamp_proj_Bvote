import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Voting from "./logo192.png";
import Logo from "./government.png";
import Vote from "./vote";
import history from "./history";
import {Link} from "react-router-dom";
function Home(){
    return(
<div className="App">
        <header className="App-header">
          <div className="LOGO">
            <div className="logo1">
              <img
                className="vote"
                src={Voting}
                alt="voting"
                width="200px"
                height="200px"
              />
            </div>
            <div className="form_control">
              <p className="a" align="center">
                GOVERMENT OF #####
              </p>
              <br />
              <p className="b" align="center">
                ELECTION COMMISSION
              </p>
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example1"
                    className="form-control"
                  />
                  <label className="form-label" for="form2Example1">
                    USERNAME
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example2"
                    className="form-control"
                  />
                  <label className="form-label" for="form2Example2">
                    Password
                  </label>
                </div>

                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form2Example31"
                        checked
                      />
                      <label className="form-check-label" for="form2Example31">
                        {" "}
                        Remember me{" "}
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                <div classNameName="button">
                  <div>
                 <Link to="/Vote">
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                      
                    >
                      Sign in
                    </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4"
                    >
                      login as government official
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    Not a member? <a href="#!">Register</a>
                  </p>
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="logo2">
              <img
                className="img"
                src={Logo}
                alt="government"
                width="200px"
                height="200px"
              />
            </div>
          </div>

          <div className="image_control"></div>
        </header>
      </div>
    );
}
export default Home;