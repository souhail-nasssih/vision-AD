import React from 'react'

export default function galerie() {
  return (
    <div>

{/* Gallery Start */}
<div className="container-fluid gallery pb-5 mt-5">
        <div className="container pb-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
            <h4 className="text-primary">Notre Galerie</h4>
            <h1 className="display-5 mb-4">Découvrez Nos Réalisations</h1>
            <p className="mb-0">Découvrez nos projets les plus récents dans le domaine de l'organisation d'événements, du marketing digital et du développement web. Chaque image représente notre engagement envers l'innovation et la qualité dans chaque aspect de notre travail.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="gallery-item">
                <img src="img/2.jpg" className="img-fluid rounded w-100 h-100" alt="Événement Réussi" />
                <div className="search-icon">
                  <a href="img/2.jpg" className="btn btn-light btn-lg-square rounded-circle" data-lightbox="Gallery-1"><i className="fas fa-search-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="gallery-item">
                <img src="img/3.jpg" className="img-fluid rounded w-100 h-100" alt="Campagne Marketing" />
                <div className="search-icon">
                  <a href="img/3.jpg" className="btn btn-light btn-lg-square rounded-circle" data-lightbox="Gallery-2"><i className="fas fa-search-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.6s">
              <div className="gallery-item">
                <img src="img/5.jpg" className="img-fluid rounded w-100 h-100" alt="Développement Web" />
                <div className="search-icon">
                  <a href="img/5.jpg" className="btn btn-light btn-lg-square rounded-circle" data-lightbox="Gallery-3"><i className="fas fa-search-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.2s">
              <div className="gallery-item">
                <img src="img/6.jpg" className="img-fluid rounded w-100 h-100" alt="Consultation Stratégique" />
                <div className="search-icon">
                  <a href="img/6.jpg" className="btn btn-light btn-lg-square rounded-circle" data-lightbox="Gallery-4"><i className="fas fa-search-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 wow fadeInUp" data-wow-delay="0.4s">
              <div className="gallery-item">
                <img src="img/3.png" className="img-fluid rounded w-100 h-100" alt="Événement" />
                <div className="search-icon">
                  <a href="img/3.png" className="btn btn-light btn-lg-square rounded-circle" data-lightbox="Gallery-5"><i className="fas fa-search-plus" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
              <div className="gallery-item">
                <img src="img/4.png" className="img-fluid rounded w-100 h-100" alt="Marketing Digital" />
                <div className="search-icon">
                  <div className="">
                    <a href="img/4.png" className="btn btn-light btn-lg-square rounded-circle " data-lightbox="Gallery-6"><i className="fas fa-search-plus" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Gallery End */}

    </div>
  )
}
