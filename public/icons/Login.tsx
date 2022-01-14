import React, { FormEvent, useState } from "react";
import Logo from "../../assets/images/logo.png";
import Facebook from "../../assets/icons/facebook.png";
import Google from "../../assets/icons/google.png";
import Linkedin from "../../assets/icons/linkedin.png";
import "./Login.scss";
import Bricks from "../Bricks/Bricks";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("yassine@bricks.co");
  const [password, setPassword] = useState("bricks");
  let navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("home");
  };
  return (
    <div className="Login">
      <div className="login-content">
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-header">
              <img src={Logo} alt="logo" />
              <span className="language">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
                  alt="flag"
                />
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3137 0.656854L6.65686 6.31371L1.00001 0.656854"
                    stroke="#889EB0"
                  />
                </svg>
              </span>
            </div>
            <div className="form-body">
              <p className="form-label">Connexion via les réseaux sociaux :</p>
              <div className="social-login">
                <Link to="/" className="btn-link">
                  <img src={Google} alt="google" />
                  <span>Google</span>
                </Link>
                <Link to="" className="btn-link">
                  <img src={Linkedin} alt="linkedin" />
                  <span>Linkedin</span>
                </Link>
                <Link to="" className="btn-link">
                  <img src={Facebook} alt="facebook" />
                  <span>Facebook</span>
                </Link>
              </div>

              <p className="form-label">Ou via votre adresse mail:</p>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Adresse e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Link to="/" className="forget-password">
                  Oublié?
                </Link>
              </div>
              <button className="button-login" type="submit">
                Se connecter
              </button>

              <p className="form-label">
                Pas encore de compte ?{" "}
                <Link to="/" className="link-signup">
                  Créer un compte
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Bricks />
    </div>
  );
};

export default Login;
