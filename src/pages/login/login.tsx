// import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useState, ChangeEvent } from "react";

interface loginProps {
  email: string;
  password: string;
}

export function Login() {
  const [values, setValues] = useState<loginProps>({
    email: "",
    password: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (ev: ChangeEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="container Login">
        <form onSubmit={handleSubmit} className="login-form">
          <h2 className="d-flex justify-content-center">BEM-VINDO DE VOLTA!</h2>
          <div className="row mt-4 justify-content-center">
            <div className="col-8 cd">
              <div className="form-floating mb-2 ">
                <button className="btn-google">
                  <i className="fab fa-google"></i>
                  Fazer login com o Google
                </button>
              </div>
            </div>
            <div className="col-8 cd">
              <div className="form-floating mb-2">
                <button className="btn-twitter">
                  <i className="fab fa-twitter"></i>
                  Fazer login com o Twitter
                </button>
              </div>
            </div>
            <div className="col-8 cd">
              <div className="form-floating mb-2">
                <button className="btn-facebook">
                  <i className="fab fa-facebook-f"></i>
                  Fazer login com o Facebook
                </button>
              </div>
            </div>
          </div>
          <h3 className="d-flex justify-content-center">OU</h3>
          <div className="row mt-4 justify-content-center">
            <div className="col-8 cd">
              <div className="form-floating mb-2">
                <input
                  type="text"
                  name="user"
                  id="user"
                  className="form-control"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Insira Seu E-mail ou Nome de Usuario"
                  required
                />
              </div>
            </div>
            <div className="col-8 cd">
              <div className="form-floating mb-2">
                <input
                  type="password"
                  name="password"
                  id="´password"
                  className="form-control "
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Insira sua senha"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn loginbtn" type="submit">
                    Logar
                  </button>
                </div>
                <Link className="linkconfig" to={"#"}>
                  Esqueceu sua senha? Clique aqui.
                </Link>
                <span className="d-flex justify-content-center gap-2">
                  Ainda não tem Conta?
                </span>
                <Link className="linkconfig" to="/SingUp">
                  Cadastre-se Aqui.
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
