import { ChangeEvent, useState } from "react";
// import { Link } from "react-router-dom";
import "./singup.css";

// Schema de Cadastro em typescript

interface RegisterProps {
  name: string;
  email: string;
  dateOfBirth: string;
  password: string;
  confirmpassword: string;
  gender: string;
}
// Inicio da Função React para criação de cadastro
export function Register() {
    // UseState para captação dos valores em seus respectivos inputs
  const [values, setValues] = useState<RegisterProps>({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });
// Função para
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
    <div className="container content">
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="row mt-4 justify-content-center">
          <h3 className="d-flex justify-content-center">Cadastre-se</h3>
          <div className="col-8">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="fullName"
                required
                placeholder="Nome completo"
                value={values.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="form-floating mb-2">
              <input
                type="text"
                name="phoneNumber"
                placeholder="Fone celular ou e-mail"
                required
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="form-floating mb-2">
              <input
                type="date"
                name="dateOfBirth"
                placeholder="Data de nascimento"
                required
                value={values.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="form-floating mb-2">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                required
                value={values.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="form-floating mb-2">
              <input
                type="password"
                name="password"
                placeholder="Confirme Sua senha"
                required
                value={values.confirmpassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-8">
            <div className="form-floating mb-2">
              <select
                name="gender"
                value={values.gender}
                onChange={handleChange}
                required
              >
                <option value="M">M</option>
                <option value="F">F</option>
                <option value="other">Outro</option>
              </select>
            </div>
          </div>
              </div>
              <div className="row justify-content-center">
                  <div className="col-8"><div className="d-flex justify-content-center">
                      <span></span>
                  </div>
                  </div>
                  <div className="col-8">
                      <div className="d-flex justify-content-center gap-2">
                          <button className="btn buttonstyle" type="submit">
                              Cadastrar
                          </button>
                      </div>
                  </div>
              </div>
      </form>
    </div>
  );
}
