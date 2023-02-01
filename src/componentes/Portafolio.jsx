import React from 'react'
import portfolio1 from "../assets/img/portafolio/portfolio1.jpg"
import portfolio2 from "../assets/img/portafolio/portfolio2.jpg"
import portfolio3 from "../assets/img/portafolio/portfolio3.jpg"

const Portafolio = () => {
  return (
   
    <section id="portfolio" className="portfolio section-spacing">
        
        <div className="container">
            
            <div className="section-title">
                <h1>Mi <span>Portfolio</span></h1>
                <span className="separator"></span>
            </div>
            
            <div className="row row-items portfolio-container project-gallery-item">
                
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 row-item portfolio-item filter-design">
                    <div className="portfolio-wrap">
                        <img src={portfolio1} className="img-fluid" alt="Portfolio 1" />
                        <div className="portfolio-info d-flex flex-column align-items-center justify-content-center">
                            <div className="portfolio-inner-info">
                                <h4>Image Project</h4>
                                <p>Design</p>
                                <div className="portfolio-links d-flex flex-row align-items-center justify-content-center">
                                    <a className="portfolio-detail-popup" href="#portfolio-details-1"><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 row-item portfolio-item filter-videos">
                    <div className="portfolio-wrap">
                        <img src={portfolio2} class="img-fluid" alt="Portfolio 2" />
                        <div className="portfolio-info d-flex flex-column align-items-center justify-content-center">
                            <div className="portfolio-inner-info">
                                <h4>Project Detail</h4>
                                <p>Design Slider</p>
                                <div className="portfolio-links d-flex flex-row align-items-center justify-content-center">
                                    <a className="portfolio-detail-popup" href="#portfolio-details-2"><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                         
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 row-item portfolio-item filter-videos">
                    <div className="portfolio-wrap">
                        <img src={portfolio3} className="img-fluid" alt="Portfolio 3" />
                        <div className="portfolio-info d-flex flex-column align-items-center justify-content-center">
                            <div className="portfolio-inner-info">
                                <h4>YouTube Video</h4>
                                <p>Videos</p>
                                <div className="portfolio-links d-flex flex-row align-items-center justify-content-center">
                                    <a className="portfolio-detail-popup" href="#portfolio-details-3"><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>   
        </div>
 
     </section>
               

  )
}

export default Portafolio