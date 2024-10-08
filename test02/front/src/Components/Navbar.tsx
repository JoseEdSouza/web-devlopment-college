import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () =>{
  const [show, setShow] = useState(false)

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setShow(!show)}>
              Dropdown
            </a>
            {
              show && (
                <>
                  <Link className='dropdown-item' to='/list'>
                    Listar
                  </Link>
                  <Link className='dropdown-item' to='/listCurso'>
                    Listar por Curso
                  </Link>
                </>
              )
            }
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default NavBar