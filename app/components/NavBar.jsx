"use client"; // Assurez-vous d'inclure ceci en haut du fichier
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/styles.css';

export default function NavBar() {
    const pathname = usePathname();

    // Fonction pour déterminer si le lien est actif
    const isActive = (path) => pathname === path ? 'nav-item nav-link active' : 'nav-item nav-link';

    return (
        <div>
            <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link href="/" className="navbar-brand p-0">
                        <img src="img/3.png" alt="Logo" className="img-fluid" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <Link href="/" className={isActive('/')}>Accueil</Link>
                            <Link href="/A-propos" className={isActive('/A-propos')}>À propos</Link>
                            <Link href="/Service" className={isActive('/Service')}>Services</Link>
                            <Link href="/Contact" className={isActive('/Contact')}>Contact</Link>
                        </div>
                        <Link href="/contact" className="btn btn-primary rounded-pill text-white py-3 px-5">Nous Contacter</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
