import React ,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/" >
                        Muro de Notas
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Link className="nav-link" to="/">Notas</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/crear">Crear Nota</Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/usuarios">Crear Usuario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

