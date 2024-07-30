"use client"; // Ajoutez ceci en haut du fichier si nécessaire

import React from 'react';
import Script from 'next/script'; // Importer le composant Script
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }) {
    return (
        <html lang="fr">
            <head>
                <title>AD Vision - Votre partenaire créatif</title>
                <meta name="description" content="Chez AD Vision, nous organisons des événements mémorables, créons des publicités impactantes, et développons des sites web. Faites confiance à notre expertise pour réaliser vos projets les plus ambitieux." />
                <meta name="keywords" content="événements, publicités, développement web, AD Vision" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://www.votre-site.com/" />
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Open+Sans:wght@300..800&display=swap" rel="stylesheet" />

                {/* Icon Font Stylesheet */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* Libraries Stylesheet */}
                <link href="/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
                <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />

                {/* Customized Bootstrap Stylesheet */}
                <link href="/styles/bootstrap.min.css" rel="stylesheet" />

                {/* Template Stylesheet */}
                <link href="/styles/styles.css" rel="stylesheet" />
            </head>
            <body>
                <NavBar />
                {children}

                {/* Footer Start */}
                <footer className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                    <div className="w-100 d-flex justify-content-start container">
                        <a href="/">
                            <img src="img/3.png" className="img-fluid w-25" alt="Logo AD Vision" />
                        </a>
                    </div>
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-md-6">
                                <div className="footer-item">
                                    <p className="mb-2">Chez AD Vision, nous organisons des événements mémorables, créons des publicités impactantes et développons des sites web. Faites confiance à notre expertise pour réaliser vos projets les plus ambitieux.</p>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-map-marker-alt text-primary me-3"></i>
                                        <p className="text-white mb-0">123 Rue de Paris, 75001 Paris, France</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="fas fa-envelope text-primary me-3"></i>
                                        <p className="text-white mb-0">contact@advision.com</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="fa fa-phone-alt text-primary me-3"></i>
                                        <p className="text-white mb-0">(+33) 1 23 45 67 89</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xl-4">
                                <div className="footer-item">
                                    <h4 className="text-white mb-4">Horaires d'ouverture</h4>
                                    <div className="opening-date mb-3 pb-3">
                                        <div className="opening-clock flex-shrink-0">
                                            <h6 className="text-white mb-0 me-auto">Lundi - Vendredi:</h6>
                                            <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>09:00 - 18:00</p>
                                        </div>
                                        <div className="opening-clock flex-shrink-0">
                                            <h6 className="text-white mb-0 me-auto">Samedi:</h6>
                                            <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>10:00 - 14:00</p>
                                        </div>
                                        <div className="opening-clock flex-shrink-0">
                                            <h6 className="text-white mb-0 me-auto">Dimanche et jours fériés:</h6>
                                            <p className="mb-0"><i className="fas fa-clock text-primary me-2"></i>Fermé</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer End */}

                <div className="position-fixed bottom-0 end-0 m-3 d-flex flex-column align-items-end index-home">
                    {/* Bouton WhatsApp */}
                    <a
                        className="btn btn-success btn-lg-square rounded-circle mb-2"
                        href="https://wa.me/212702970861"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ backgroundColor: '#25D366', border: 'none' }}
                    >
                        <i className="fab fa-whatsapp fa-2x text-white"></i>
                    </a>
                    {/* Back to Top */}
                    <a href="#id" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
                        <i className="fa fa-arrow-up"></i>
                    </a>
                </div>

                {/* JavaScript Libraries */}
                <Script
                    src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                    strategy="beforeInteractive"
                />
                <Script src="/lib/wow/wow.min.js" strategy="lazyOnload" />
                <Script src="/lib/easing/easing.min.js" strategy="lazyOnload" />
                <Script src="/lib/waypoints/waypoints.min.js" strategy="lazyOnload" />
                <Script src="/lib/counterup/counterup.min.js" strategy="lazyOnload" />
                <Script src="/lib/lightbox/js/lightbox.min.js" strategy="lazyOnload" />
                <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="lazyOnload" />
                
                {/* Template Javascript */}
                <Script src="/js/main.js" strategy="lazyOnload" />
            </body>
        </html>
    );
}
