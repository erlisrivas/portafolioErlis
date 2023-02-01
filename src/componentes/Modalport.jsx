import React from 'react'

const Modalport = () => {
  return (
    <div id="portfolio-details-1" className="container portfolio-details mfp-hide">
                        <h2 className="popup-detail-title">Project Title</h2>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-4 mb-lg-0">
                                <img src="assets/images/portfolio/portfolio-1.jpg" className="img-fluid" alt="Portfolio 1" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 portfolio-content">
                                <h4 className="">Project Info:</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley book.</p>
                                <h4 className="mt-4">Project Details:</h4>
                                <ul>
                                    <li className="mb-1"><strong>Client</strong>: Lorem Ipsum</li>
                                    <li className="mb-1"><strong>Category</strong>: Web design</li>
                                    <li className="mb-1"><strong>Technologies</strong>: HTML5, CSS3, WordPress, PHP, jQuery</li>
                                    <li className="mb-1"><strong>Project date</strong>: 21 May, 2020</li>
                                    <li className="mb-1"><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                </ul>
                                <ul className="d-flex flex-row align-items-center text-center">
                                    <li className="block-title"><strong class="font-14 parent-color pr-2">Share: </strong></li>
                                    <li className="mr-3"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li className="mr-3"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    <li className="mr-3"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Google plus"><i className="fa fa-google-plus"></i></a></li>
                                    <li className="mr-3"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Instagram"><i className="fa fa-instagram"></i></a></li>
                                    <li className="mr-3"><a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
  )
}

export default Modalport