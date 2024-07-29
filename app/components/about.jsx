import React from 'react'

export default function about() {

  return (
    <div>
        <div className="container-fluid about pb-5">
                <div className="container pb-5">
                    <div className="row g-5">
                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div>
                                <h4 className="text-primary">À Propos de AD Vision</h4>
                                <h1 className="display-6 mb-4">Créativité et Partenariat pour Vos Projets</h1>
                                <p className="mb-5">
                                    Chez AD Vision, nous offrons une gamme complète de services pour organiser des événements inoubliables, créer des campagnes publicitaires percutantes, et développer des sites web et applications innovantes.
                                </p>
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <i className="fas fa-glass-cheers fa-2x text-primary" />
                                            </div>
                                            <div>
                                                <h4>Événements et Soirées</h4>
                                                <p>Organisation d'événements et soirées mémorables pour toutes occasions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <i className="fas fa-bullhorn fa-2x text-primary" />
                                            </div>
                                            <div>
                                                <h4>Publicité et Marketing</h4>
                                                <p>Création de campagnes publicitaires et stratégies de marketing digital efficaces.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <i className="fas fa-wallet fa-2x text-primary" />
                                            </div>
                                            <div>
                                                <h4>Prix Abordables</h4>
                                                <p>Des services de qualité à des prix compétitifs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <div className="me-3">
                                                <i className="fas fa-shield-alt fa-2x text-primary" />
                                            </div>
                                            <div>
                                                <h4>Sécurité et Fiabilité</h4>
                                                <p>Assurance de sécurité et de fiabilité dans tous nos services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="position-relative rounded">
                                <div className="rounded" style={{ marginTop: 40 }}>
                                    <div className="row g-0">
                                        <div className="col-lg-12">
                                            <div className="rounded mb-4">
                                                <img src="img/creat.jpeg" className="img-fluid rounded w-100" alt="AD Vision" />
                                            </div>
                                            <div className="row gx-4 gy-0">
                                                <div className="col-6">
                                                    <div className="counter-item bg-primary rounded text-center p-4 h-100">
                                                        <div className="counter-item-icon mx-auto mb-3">
                                                            <i className="fas fa-lightbulb fa-3x text-white" />
                                                        </div>
                                                        <div className="counter-counting mb-3">
                                                            <span className="text-white fs-2 fw-bold">100</span>
                                                            <span className="h1 fw-bold text-white">%</span>
                                                        </div>
                                                        <h5 className="text-white mb-0">Créativité Inégalée</h5>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="counter-item bg-dark rounded text-center p-4 h-100">
                                                        <div className="counter-item-icon mx-auto mb-3">
                                                            <i className="fas fa-star fa-3x text-white" />
                                                        </div>
                                                        <div className="counter-counting mb-3">
                                                            <span className="text-white fs-2 fw-bold">100</span>
                                                            <span className="h1 fw-bold text-white">%</span>
                                                        </div>
                                                        <h5 className="text-white mb-0">Engagement Total</h5>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="rounded bg-primary p-4 position-absolute d-flex justify-content-center align-items-center" style={{ width: '90%', height: 80, top: '-40px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h3 className="mb-0 text-white">Prêts à Transformer l'Avenir</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
