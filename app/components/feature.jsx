'use client';  // Ajoutez cette ligne au début du fichier

import React, { useState } from 'react';
import Modal from './modelFeature';

const features = [
  {
    title: "Organisation d'Événements",
    image: "/img/event.jpg",
    longDescription: "Chez AD Vision, nous organisons des événements inoubliables et sur mesure, parfaitement adaptés à tous vos besoins et envies.",
    details: [
      "Planification complète de l'événement",
      "Coordination des fournisseurs",
      "Gestion de la logistique",
      "Service de décoration personnalisé"
    ]
  },
  {
    title: "Marketing Digital",
    image: "/img/digital.jpg",
    longDescription: "Nous créons des campagnes publicitaires impactantes pour promouvoir votre marque efficacement.",
    details: [
      "Stratégies de marketing sur mesure",
      "Gestion des réseaux sociaux",
      "Optimisation SEO",
      "Publicité en ligne ciblée"
    ]
  },
  {
    title: "Développement Web",
    image: "/img/dev.jpg",
    longDescription: "Notre équipe AD Vision développe des sites web sur mesure pour vous aider à atteindre vos objectifs.",
    details: [
      "Conception de sites web responsive",
      "Développement de boutiques en ligne",
      "Maintenance et support technique",
      "Intégration de systèmes tiers"
    ]
  }
];

const Feature = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleOpenModal = (feature) => {
    setSelectedFeature(feature);
  };

  const handleCloseModal = () => {
    setSelectedFeature(null);
  };

  return (
    <div className="container-fluid feature py-5">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`} key={index}>
              <div className="feature-item">
                <img src={feature.image} className="img-fluid rounded w-100" alt={feature.title} />
                <div className="feature-content p-4 d-flex align-items-center">
                  <div className="feature-content-inner">
                    <h4 className="text-white">{feature.title}</h4>
                    <p className="text-white">{feature.longDescription}</p>
                    <button
                      className="btn btn-primary rounded-pill py-2 px-4"
                      onClick={() => handleOpenModal(feature)}
                    >
                      En Savoir Plus <i className="fa fa-arrow-right ms-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedFeature && <Modal feature={selectedFeature} handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Feature;
