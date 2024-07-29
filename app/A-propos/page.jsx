"use client"; // Ajoutez ceci en haut du fichier si nécessaire
import React from 'react'
import Feature from '../components/feature';
import AboutContent from '../components/about';

export default function AboutPage() {
    return (
        <div>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">À Propos</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li className="breadcrumb-item"><a href="/">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">À Propos</li>
                    </ol>
                </div>
            </div>
            <div className='mt-5'>
            <Feature />
            <AboutContent />

            </div>
        </div>
    )
}
