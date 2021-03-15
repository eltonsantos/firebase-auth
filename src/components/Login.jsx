import React, { useState } from 'react'
import { auth } from '../firebaseconfig';
import {useHistory} from 'react-router-dom';

const Login = () => {

  const history = useHistory();
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState(null);

  const RegistrarUsuario = (e) => {
    e.preventDefault();
    
      auth.createUserWithEmailAndPassword(email, password)
      .then( r => {
        history.push('/');
      })
      .catch (e => {
        if(e.code === 'auth/invalid-email'){
          setError('Formato de email incorreto');
        }
        if(e.code === 'auth/weak-password'){
          setError('Senha deve conter no mínimo 6 caracteres');
        }
    })
  }

  const LoginUsuario = (e) => {
    auth.signInWithEmailAndPassword(email, password)
    .then( (r) => {
      history.push('/');
    })
    .catch( (e) => {
      if(e.code === 'auth/wrong-password'){
        setError('Senha incorreta');
      }
    })
  }

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegistrarUsuario} className="form-group">
          <input onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Insira seu email" type="email" />
          <input onChange={(e) => {setPassword(e.target.value)}} className="form-control mt-4" placeholder="Insira sua senha" type="password" />
          <input className="btn btn-block btn-dark mt-4" type="submit" value="Registrar usuário" />
        </form>
        <button onClick={LoginUsuario} className="btn btn-success btn-block">Iniciar sessão</button>
        {
          error !== null ?
          (
            <div className="alert alert-danger mt-3">
              {error}
            </div>
          )
          :
          (
            <span></span>
          )
        }
      </div>
      <div className="col"></div>
    </div>
  )
}

export default Login
