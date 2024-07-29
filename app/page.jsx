import FormContact from "./components/formContact";
import Feature from "./components/feature";
import About from "./components/about";
import Galerie from "./components/galerie";
import Service from "./components/service";
import Coment from "./components/coment";


export default function Home() {
    return (
        <>

            <div className="container-fluid bg-breadcrumb-home">
                <div className="container text-center">
                    <div className="row g-5 align-items-center">
                        <div className="col-12 col-md-7 fadeInLeft animated" data-animation="fadeInLeft" data-delay="0.1s" style={{ animationDelay: '0.1s' }}>
                            <div className="text-center text-md-start py-4">
                                <h4 className="text-primary text-uppercase fw-bold mb-4">Bienvenue chez AD Vision</h4>
                                <h1 className="display-6 text-uppercase text-white mb-4">Votre partenaire créatif</h1>
                                <p className="mb-4 fs-5 d-none d-md-block text-white-50">
                                    Chez <span>AD Vision</span>, nous organisons des événements mémorables, créons des publicités impactantes, et développons des sites web. Faites confiance à notre expertise pour réaliser vos projets les plus ambitieux.
                                </p>
                                <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start ">
                                    <a className="btn btn-secondary rounded-pill text-white py-3 px-5 mb-2 mb-md-0 me-md-3 w-100" href="/services">Nos Services</a>
                                    <a className="btn btn-primary rounded-pill text-white py-3 px-5 w-100 " href="/contact">Nous Contacter</a>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-5 d-none d-lg-block fadeInRight animated " data-animation="fadeInRight" data-delay="0.1s" style={{ animationDelay: '0.1s' }}>
                            <div className=''>
                            <FormContact />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <Feature />
            <About />
            <Service />
            <Galerie />
            <Coment />
        </>
    )
}