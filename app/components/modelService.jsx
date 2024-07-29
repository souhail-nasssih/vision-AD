  import React from 'react';

  const Modal = ({ service, handleCloseModal }) => {
    // Fonction pour obtenir la classe de l'icône en fonction du titre du service
    const getIconClass = (title) => {
      switch (title) {
        case 'Organisation d\'Événements':
          return 'fas fa-calendar-alt';
        case 'Marketing Digital':
          return 'fas fa-bullhorn';
        case 'Développement Web':
          return 'fas fa-laptop-code';
        case 'Consultation Stratégique':
          return 'fas fa-desktop';
        default:
          return 'fas fa-info-circle'; // Icône par défaut
      }
    };

    return (
      <div className="modal show fade" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white border-0">
              <h5 className="modal-title text-center text-white w-100">{service.title}</h5>
              <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body text-center">
              <i className={getIconClass(service.title)} style={{ fontSize: '4rem', color: '#007bff' }}></i>
              <p className="mt-3 mb-4">{service.description}</p>
              <ul className="list-group list-group-flush">
                {service.details.map((detail, index) => (
                  <li key={index} className="list-group-item border-0">
                    <i className="fas fa-check-circle me-2 text-primary"></i>{detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;
