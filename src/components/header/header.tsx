import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>
            FitGear Emporium
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to={"/WishList"}
                >
                  Carrinho
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/Login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to={"/Profile"}
                >
                  Perfil
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ainda n funcional"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
