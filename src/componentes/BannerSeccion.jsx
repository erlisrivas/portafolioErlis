import React from 'react'
import '../App.css';
import fotoperfil from "../assets/img/fotoperfil.jpg"

const BannerSeccion = () => {
  return (
    <section id="banner" className="banner-section header-bg-img d-flex align-items-center">
                   
                    <div className="container">
                        
                        <div className="banner-inner d-flex align-items-center justify-content-center">
                           
                            <div className="banner-img mb-4 mb-lg-0">
                                <img className="img-fluid center-picture" src={fotoperfil} alt="Profile" />
                            </div>
                            
                            <div className="banner-text ml-lg-5">
                                <h2>Hola!</h2>
                                <h3 className="d-sm-block d-none cd-headline clip text-capitalize">Soy Erlis Rivas
                                </h3>
                                <p>Desarrollador Front end con React e ingeniero de petróleo</p>
                                <div class="social-links d-flex flex-wrap">
                                    <a href="https://wa.me/56979946744" data-toggle="tooltip" data-placement="top" data-original-title="Whatsapp"><i className="fab fa-whatsapp"></i></a>
                                    <a href="mailto:erlisrivas@gmail.com" data-toggle="tooltip" data-placement="top" data-original-title="Correo"><i className="far fa-envelope"></i></a>
                                    <a href="https://github.com/erlisrivas" data-toggle="tooltip" data-placement="top" data-original-title="Github"><i className="fab fa-github"></i></a>
                                    <a href="https://linkedin.com/in/erlis-rivas" data-toggle="tooltip" data-placement="top" data-original-title="Linkedin"><i className="fab fa-linkedin"></i></a>
                                </div>
                                <div className="info-button">
                                    <a href="#about" className="btn btn-secondary about-btn mr-sm-3"><span><i className="fa fa-user mr-2"></i>Mas sobre mi</span></a>
                                    <a href="#portfolio" className="btn btn-success portfolio-btn mb-0"><span><i className="fa fa-rocket mr-2"></i>MI portafolio</span></a>
                                </div>
                            </div>
                          
                        </div>
                       
                            
                        
                    </div>
                   
                </section>
  )
}

export default BannerSeccion