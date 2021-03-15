import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {auth} from '../firebaseconfig'

const Menu = () => {

  const history = useHistory();
  const[usuario, setUsuario] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUsuario(user.email);
        console.log(user.email);
      }
    })
  }, [])

  const EncerrarSessao = () => {
    auth.signOut()
    setUsuario(null)
    history.push('/');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            {
              !usuario ?
              (
                <Link className="nav-link" to="/login">Login</Link>
              )
              :
              (
                <span></span>
              )
            }
          </li>
          <li className="nav-item">
            {
              usuario ?
              (
                <Link className="nav-link" to="/admin">Admin</Link>
              )
              :
              (
                <span></span>
              )
            }
          </li>
        </ul>
        {
          usuario ?
          (
            <>
              <span style={{ color:'#ccc', marginRight:'10px' }}>Bem vindo, { usuario } </span>
              <button onClick={EncerrarSessao} className="btn btn-danger">Encerrar sessão</button>
            </>
          )
          :
          (
            <span></span>
          )
        }
      </nav>
    </div>
  )
}

export default Menu
