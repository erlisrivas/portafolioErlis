import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="about section-spacing">
   
    <div className="container ">
        <div className="about p-5">
        <div className="section-title ">
            <h1>Acerca de <span>mi</span></h1>
            <span className="separator"></span>
        </div>
       
        <div className="content-block">
          
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="about-text">
                        <h4>Hola! Soy <span>Erlis Rivas</span></h4>
                        <p>Soy Ingeniero de petróleo con 3 años de experiencia en la industria petrolera en el área desarrollo de reservorios, realice un bootcamp de desarollo web Front end con miras a oportunidades de crecimiento profesional y tengo mucho interes de seguir aprendiendo nuevas tecnologías. </p>
                        <p>Me considero un profesional dinámico y flexible con plena capacidad de adaptación a diferentes entornos laborales. Cuento con capacidad de trabajo en equipo, capacidad analítica y alto sentido de responsabilidad. Ademas cuento con amplia disponibilidad para seguir aprendiendo y aplicar mis conocimientos en el área TI</p>
                        <a className="mb-4 mb-lg-0 btn btn-success" href="#"><span><i className="fa fa-download mr-2"></i>Descarga mi cv</span></a>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                    <div className="about-details clearfix">
                        <ul className="float-right pl-2 pt-5">
                            <li className="mb-1"><span>Telefono :</span> <span><a href="tel:+011234567890">+56 979946744</a></span></li>
                            <li className="mb-1"><span>Correo :</span> <span><a href="mailto:email@example.com">erlisrivas@gmail.com</a></span></li>
                            <li className="mb-1"><span>Linkedin:</span> <span>linkedin.com/in/erlis-rivas</span></li>
                            <li className="mb-1"><span>Github :</span> <span> github.com/erlisrivas</span></li>
                        </ul>
                    </div>
                </div>
            </div>          
        </div>
        </div>
       
        <div className="content-block">
           
            <h3 className="section-subtitle text-center text-uppercase mb-5">Experiencia &amp; Educación</h3>
          
            <div className="row">
              
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h4 className="education-title block-title text-center text-uppercase mb-4">Educacíon</h4>
                    <div className="education pl-4">
                        <div className="education-box mb-4">
                            <h5 className="box-title">Desarrollador Front End</h5>
                            <div className="item-details mb-2 mb-sm-1">
                                <span className="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>Academia Desafío latam</span>
                                <span className="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Mar 2022 - Nov 2022</span>
                            </div>
                            <p className="box-description">Fundamentos de Desarollo Web (Html, Css, Bootstrap, Terminal, Git, Github, Github page), Css Avanzado, Programación con JavaScript, React (Estado de los componentes y eventos,  renderización dinámica, consumo de APIs)</p>
                        </div>
                        <div className="education-box mb-4">
                            <h5 className="box-title">Diplomado en fluidos de perforación</h5>
                            <div class="item-details mb-2 mb-sm-1">
                                <span class="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>Universidad de Oriente- Venezuela</span>
                                <span class="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Sep 2012 - Nov 2013</span>
                            </div>
                            <p className="box-description">Sistemas de fluidos de perforación. Formulación, control y buenas prácticas de manejo del fluido de perforación, presión hidrostática, interacción roca fluido. Química de las arcillas</p>
                        </div>
                        <div className="education-box mb-4 mb-lg-0">
                            <h5 className="box-title">Ingeniero de petróleo</h5>
                            <div className="item-details mb-2 mb-sm-1">
                                <span className="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>Universidad de Oriente- Venezuela</span>
                                <span className="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Sept 2007 - Oct 2013</span>
                            </div>
                            <p className="box-description">Geología general y estructural, yacimientos de hidrocarburos, perforación de pozos, rehabilitación, refinación de hidrocarburos</p>
                        </div>
                    </div>
                </div>
              
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <h4 className="experince-title block-title text-center text-uppercase mb-4">Experiencia</h4>
                    <div className="experince pl-4">
                        <div className="experince-box mb-4">
                            <h5 className="box-title">Desarrollador web wordpress</h5>
                            <div className="item-details mb-2 mb-sm-1">
                                <span className="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>NeoDigital Spa,</span>
                                <span className="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Febrero 2022 <span class="badge badge-success current ml-2">Present</span></span>
                            </div>
                            <p className="box-description">Desarrollo y mantenimiento de páginas web con wordpress y asesorías a clientes en el área web</p>
                        </div>
                        <div className="experince-box mb-4">
                            <h5 className="box-title">Encargada de finanzas</h5>
                            <div className="item-details mb-2 mb-sm-1">
                                <span className="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>Ferrecletreros Spa</span>
                                <span className="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Mar 2018 - Feb 2022</span>
                            </div>
                            <p className="box-description">Gestión de cobranza y pago a proveedores. Elaboración de inventarios y gestión de compras de materiales e insumos para la empresa.</p>
                        </div>
                        <div className="experince-box mb-lg-0">
                            <h5 className="box-title">Ingeniero de yacimientos</h5>
                            <div className="item-details mb-2 mb-sm-1">
                                <span className="university d-inline-block mr-3"><i className="fa fa-book mr-2"></i>Petróleos de venezuela S.a,</span>
                                <span className="year d-inline-block"><i className="fa fa-calendar mr-2"></i>Mar 2015 - Oct 2018</span>
                            </div>
                            <p className="box-description">Evaluación de pozos inactivos categoría 3 con la finalidad de proponer trabajos de rehabilitación, limpieza o abandono.
                            Monitoreo de pozos activos, evaluación del comportamiento de producción mediante análisis nodal. Evaluación estática y dinámica de yacimientos y elaboración de propuestas de esquemas de explotación</p>
                        </div>
                    </div>
                </div>
                
            </div>
          
        </div>
      
        
       
    </div>
   
</section>
  )
}

export default AboutSection