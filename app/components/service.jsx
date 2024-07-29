"use client"; // Assurez-vous d'inclure ceci en haut du fichier
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/styles.css';
import Modal from './modelService';

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Organisation d\'Événements',
      description: 'Nous organisons des événements mémorables adaptés à vos besoins et préférences. Que ce soit pour des fêtes, des conférences ou des lancements, nous avons ce qu\'il vous faut.',
      details: [
        'Événements privés et professionnels',
        'Planification complète',
        'Coordination le jour J'
      ]
    },
    {
      title: 'Marketing Digital',
      description: 'Nous créons des campagnes publicitaires efficaces pour promouvoir votre marque et atteindre votre audience cible. Profitez d\'une visibilité accrue et d\'une stratégie de marketing adaptée.',
      details: [
        'Campagnes publicitaires ciblées',
        'SEO et SEM',
        'Analyse de performance'
      ]
    },
    {
      title: 'Développement Web',
      description: 'Notre équipe développe des sites web personnalisés pour répondre à vos besoins spécifiques. Qu\'il s\'agisse de sites vitrines ou de solutions plus complexes, nous avons l\'expertise nécessaire.',
      details: [
        'Sites web sur mesure',
        'Solutions e-commerce',
        'Maintenance et support'
      ]
    },
    {
      title: 'Consultation Stratégique',
      description: 'Bénéficiez de notre expertise pour élaborer des stratégies efficaces et adaptées à votre secteur d\'activité. Nous vous aidons à maximiser vos résultats et à atteindre vos objectifs.',
      details: [
        'Stratégies de croissance',
        'Analyse de marché',
        'Conseils personnalisés'
      ]
    }
  ];

  const handleOpenModal = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <div className="container-fluid service py-5">
        <div className="container service-section py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
            <h4 className="text-primary">Nos Services</h4>
            <h1 className="display-5 text-white mb-4">Découvrez les Services d'AD Vision</h1>
            <p className="mb-0 text-white">Chez AD Vision, nous offrons une gamme complète de services pour répondre à vos besoins en publicité, organisation d'événements et développement web. Explorez ce que nous avons à offrir et laissez-nous vous aider à atteindre vos objectifs.</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <div className="service-item p-4" style={{ cursor: 'pointer' }} onClick={() => handleOpenModal(service)}>
                  <div className="service-content">
                    <div className="text-center mb-4">
                      <i className={getIconClass(service.title)} style={{ fontSize: '4rem' }}></i>
                    </div>
                    <h4 className="d-inline-block mb-3">{service.title}</h4>
                    <p className="mb-0">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <Modal service={selectedService} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

const getIconClass = (title) => {
  switch (title) {
    case 'Organisation d\'Événements':
      return 'fas fa-calendar-alt fa-4x';
    case 'Marketing Digital':
      return 'fas fa-bullhorn fa-4x';
    case 'Développement Web':
      return 'fas fa-laptop-code fa-4x';
    case 'Consultation Stratégique':
      return 'fas fa-desktop fa-4x';
    default:
      return 'fas fa-info-circle fa-4x'; // Default icon
  }
};      

export default Service;
