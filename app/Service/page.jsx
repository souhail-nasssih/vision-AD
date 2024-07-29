
"use client"; // Ajoutez ceci en haut du fichier si nécessaire
import React from 'react'
import Feature from '../components/service'
import ServiceP from '../components/feature'

export default function Service() {
    return (
        <div>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Service</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                        <li className="breadcrumb-item"><a href="/">Pages</a></li>
                        <li className="breadcrumb-item active text-primary">Service</li>
                    </ol>
                </div>
            </div>
            <div className='mt-5'>
            <ServiceP />
            <Feature />

            </div>
        </div>
    )
}
