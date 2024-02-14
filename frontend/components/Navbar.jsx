import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
                        <Link to="/login" class="nav-link" href="#">Login</Link>
                        <Link to="/" class="nav-link" href="#">Pricing</Link>
                        <Link to="/" class="nav-link" aria-disabled="true">Disabled</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar