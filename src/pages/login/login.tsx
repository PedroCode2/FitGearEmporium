import { Link } from "react-router-dom";
import "./login.css";

export function Login() {
  return (
    <>
      <div className="container bt">
        <form>
          <div className="row mt-4 justify-content-center">
            <h3 className="d-flex justify-content-center">Log In</h3>
            <div className="col-8">
              <div className="form-floating mb-2">
                <input type="text"
                  name="user"
                  id="user"
                  className="form-control cd"
                  placeholder="Insira Seu E-mail ou Nome de Usuario"
                  required                  
                />
              </div>
            </div>
            <div className="col-8">
              <div className="form-floating mb-2">
                <input type="password"
                  name="password"
                  id="´password"
                  className="form-control cd"
                  placeholder="Insira sua senha"
                  required 
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col">
                <div className="d-flex justify-content-center gap-2">
                  <button className="btn loginbtn" type="submit">Logar</button>
                </div>
                <span className="d-flex justify-content-center gap-2">Ainda não tem Conta?</span>
                <Link className="linkconfig" to='/SingUp'>
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
