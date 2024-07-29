
'use client';  // Ajoutez cette ligne au début du fichier
import React from 'react';

const Modal = ({ feature, handleCloseModal }) => {
  return (
    <div className="modal show fade" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <div className="modal-dialog modal-dialog-scrollable modal-lg d-flex align-items-center">
        <div className="modal-content border-0">
          <div className="modal-header border-0 bg-primary text-white">
            <h5 className="modal-title text-center text-white w-100">{feature.title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
          </div>
          <div className="modal-body">
            <img 
              src={feature.image} 
              className="img-fluid rounded mb-3" 
              alt={feature.title} 
              style={{ maxHeight: '300px', objectFit: 'cover' }} 
            />
            <p>{feature.longDescription}</p>
            <ul className="list-group list-group-flush">
              {feature.details.map((detail, index) => (
                <li key={index} className="list-group-item"><i className="fas fa-check-circle me-2 text-primary"></i>
                  {detail}
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
