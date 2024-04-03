import { Link } from 'react-router-dom';
import './style.css'
import logo  from './logo-menu.png';

export default function MenuWeb() {
  return (
    <>

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">

  <div className="container">

    <Link to={"/"} className="navbar-brand" >
      <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
    </Link>



    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link to={"/"} className="nav-link active">Página Principal</Link>
        </li>

        <li className="nav-item">
          <Link to={"/login"} className="nav-link active">Ingresar</Link>
        </li>

        <li className="nav-item">
          <Link to={"/register"} className="nav-link active">Regístrate en nuestra web</Link>
        </li>


      </ul>
    </div>
  </div>
</nav>
    
    
    </>
  )
}
