import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cartdata from './Cartdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import CartItems from './CartItems';

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                            <li className="nav-item dropdown"><a className="nav-link" href="#!">Shop</a></li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-dark" type="submit">
                                <FontAwesomeIcon className='font' icon={faCartShopping} />
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{0}</span>
                                <FontAwesomeIcon className='font' icon={faChevronCircleDown} />
                                <CartItems></CartItems>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <header className="bg-primary py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-warning">
                        <h1 className="display-4 fw-bolder">OIP Shoping Platform</h1>
                        <p className="lead fw-normal text-warning-100 mb-0">Best Product Best Quality</p>
                    </div>
                </div>
            </header>
            <Cartdata />
            <footer className="py-5 bg-warning">
                <div className="container"><p className="m-0 text-center text-primary">Copyright &copy; OIP Website 2022</p></div>
            </footer>
        </div>
    );
}

export default App;
