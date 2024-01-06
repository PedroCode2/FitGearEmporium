import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/login/login";
import { Header } from "./components/header/header";
import './style/global.css'


function App() {
  return (
    <>
      <Header />
          <Routes>
            <Route path="/" element={ <Login/> } />
          </Routes>
    </>
  );
}

export default App;
