import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default class Login extends React.Component {

    render() {
        return (
            <div className="body">
                <Link to="/landing">    <h5 style={{ color: "white" }}>  &larr; Retourner</h5></Link>
                <div className="login">
                    <h3 className="h1">Entrez vos identifiants</h3>
                    <form>
                        <input type="text" name="u" placeholder="Identifiant" required="required" className="login-input" />
                        <input type="password" name="p" placeholder="Mot de passe" required="required" className="login-input" />
                        <button type="submit" className="btn btn-primary btn-block btn-large login-btn" >Se connecter</button>
                    </form>
                </div>
            </div>
        )
    }
}