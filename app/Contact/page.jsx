"use client"; // Ajoutez ceci en haut du fichier si nécessaire
import React from 'react'
import FormContact from '../components/formContact'
export default function Contact() {
  return (
    <div>

      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">contact</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><a href="/">Accueil</a></li>
            <li className="breadcrumb-item"><a href="/">Pages</a></li>
            <li className="breadcrumb-item active text-primary">contact</li>
          </ol>
        </div>
      </div>
      <div className="mt-5 w-100 d-flex justify-content-center ">
        <div className='w-50' >
          <h4 className="text-primary wow fadeInDown" data-wow-delay="0.3s">Contactez-Nous</h4>
          <p className="mb-0 wow fadeInDown" data-wow-delay="0.3s">
            Vous avez des questions ou des demandes ? N'hésitez pas à nous contacter. Remplissez le formulaire ci-dessous pour nous envoyer un message
          </p>

        </div>
      </div>



      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-12 col-xl-6 wow fadeInUp " data-wow-delay="0.2s">
              <div className=''>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="contact-add-item rounded bg-light p-4">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-map-marker-alt fa-2x" />
                      </div>
                      <div>
                        <h4>Adresse</h4>
                        <p className="mb-0">123 Rue de l'Innovation, Paris, France</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-add-item rounded bg-light p-4">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fas fa-envelope fa-2x" />
                      </div>
                      <div>
                        <h4>Envoyez-nous un Email</h4>
                        <p className="mb-0">contact@advision.fr</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-add-item rounded bg-light p-4">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fa fa-phone-alt fa-2x" />
                      </div>
                      <div>
                        <h4>Téléphone</h4>
                        <p className="mb-0">(+33) 1 2345 6789</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-add-item rounded bg-light p-4">
                      <div className="contact-icon text-primary mb-4">
                        <i className="fab fa-chrome fa-2x" />
                      </div>
                      <div>
                        <h4>Site Web</h4>
                        <p className="mb-0">www.advision.fr</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-around bg-light rounded p-4">
                      <a className="btn btn-xl-square btn-primary rounded-circle" href="#"><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-xl-square btn-primary rounded-circle" href="#"><i className="fab fa-twitter" /></a>
                      <a className="btn btn-xl-square btn-primary rounded-circle" href="#"><i className="fab fa-instagram" /></a>
                      <a className="btn btn-xl-square btn-primary rounded-circle" href="#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
              <FormContact />
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="rounded">
                <iframe className="rounded w-100" style={{ height: 400 }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127.12630618263954!2d2.295906!3d48.858844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66b3c657be9a7%3A0x230df9c3f2456f72!2sEiffel%20Tower%2C%20Champ%20de%20Mars%2C%2075507%20Paris%2C%20France!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='localisation' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
