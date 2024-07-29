'use client'; // Assurez-vous d'ajouter cette ligne au début du fichier

import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function FormContact() {
    const [errors, setErrors] = useState({});

    // Fonction de validation
    const validate = (formData) => {
        const newErrors = {};
        if (!formData.get('name')) newErrors.name = 'nom';
        if (!formData.get('email')) newErrors.email = 'email';
        if (!formData.get('tel')) newErrors.tel = 'téléphone';
        if (!formData.get('project')) newErrors.project = 'projet';
        if (!formData.get('sujet')) newErrors.sujet = 'sujet';
        if (!formData.get('message')) newErrors.message = 'message';
        return newErrors;
    };

    // Fonction de soumission du formulaire
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newErrors = validate(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Création d'un objet personnalisé pour l'email
        const object = {
            access_key: "088ace0c-21c7-4d72-a695-6064ce41284f",
            from_name: "AD Vision",
            subject: "Nouvelle soumission de formulaire",
            name: formData.get('name'),
            email: formData.get('email'),
            tel: formData.get('tel'),
            project: formData.get('project'),
            sujet: formData.get('sujet'),
            message: formData.get('message'),
        };

        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                Swal.fire({
                    title: "Envoyé",
                    text: "Votre message a été envoyé avec succès",
                    icon: "success",
                    customClass: {
                        confirmButton: 'swal-button-custom'
                    }
                });
                event.target.reset(); // Réinitialiser le formulaire en cas de succès
                setErrors({}); // Effacer les erreurs
            } else {
                Swal.fire({
                    title: "Erreur",
                    text: "Une erreur est survenue. Veuillez réessayer.",
                    icon: "error",
                    customClass: {
                        confirmButton: 'swal-button-custom'
                    }
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Erreur",
                text: "Une erreur est survenue. Veuillez réessayer.",
                icon: "error",
                customClass: {
                    confirmButton: 'swal-button-custom'
                }
            });
        }
    };

    return (
        <div>
            <div className="bg-light p-5 rounded h-75">
                <h4 className="text-primary mb-4">Envoyez Votre Message</h4>
                <form onSubmit={onSubmit}>  
                    <div className="row g-4">
                        <div className="col-lg-12 col-xl-12">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className={`form-control border-0 ${errors.name ? 'is-invalid' : ''}`} 
                                    id="name" 
                                    placeholder="Votre Nom" 
                                    name='name' 
                                />
                                <label htmlFor="name">Votre Nom</label>
                                {errors.name && <div className="invalid-feedback text-start">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-12">
                            <div className="form-floating">
                                <input 
                                    type="email" 
                                    className={`form-control border-0 ${errors.email ? 'is-invalid' : ''}`} 
                                    id="email" 
                                    placeholder="Votre Email" 
                                    name='email' 
                                />
                                <label htmlFor="email">Votre Email</label>
                                {errors.email && <div className="invalid-feedback text-start">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className={`form-control border-0 ${errors.tel ? 'is-invalid' : ''}`} 
                                    id="phone" 
                                    placeholder="Téléphone" 
                                    name='tel' 
                                />
                                <label htmlFor="phone">Votre Téléphone</label>
                                {errors.tel && <div className="invalid-feedback text-start">{errors.tel}</div>}
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className={`form-control border-0 ${errors.project ? 'is-invalid' : ''}`} 
                                    id="project" 
                                    placeholder="Projet" 
                                    name='project' 
                                />
                                <label htmlFor="project">Votre Projet</label>
                                {errors.project && <div className="invalid-feedback text-start">{errors.project}</div>}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input 
                                    type="text" 
                                    className={`form-control border-0 ${errors.sujet ? 'is-invalid' : ''}`} 
                                    id="subject" 
                                    placeholder="Sujet" 
                                    name='sujet' 
                                />
                                <label htmlFor="subject">Sujet</label>
                                {errors.sujet && <div className="invalid-feedback text-start">{errors.sujet}</div>}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea 
                                    className={`form-control border-0 ${errors.message ? 'is-invalid' : ''}`} 
                                    placeholder="Laissez un message ici" 
                                    id="message" 
                                    style={{ height: 160 }} 
                                    name='message' 
                                />
                                <label htmlFor="message">Message</label>
                                {errors.message && <div className="invalid-feedback text-start">{errors.message}</div>}
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100 py-3">Envoyer le Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
