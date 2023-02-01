import React from 'react'

const Contacto = () => {
  return (
   
                <section id="contact" className="contact section-spacing">
                   
                    <div className="container">
                       
                        <div className="section-title">
                            <h1>Contacto </h1>
                            <span className="separator"></span>
                        </div>
                       
                        <div className="content-block contact-info-block m-5">
                          
                            <div className="row  row-items">
                               
                                <div className="col-md-6 row-item d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-row">
                                        <div className="card-icon"><i className="fa fa-map-marker"></i></div>
                                        <div className="card-content ml-3">
                                            <h3>Dirección</h3>
                                            <p>Mirador de los Andes, Los Ángeles</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 row-item d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-row">
                                        <div className="card-icon"><i class="fa fa-share-alt"></i></div>
                                        <div className="card-content ml-3">
                                            <h3>Redes sociales</h3>
                                            <div className="social-links d-flex flex-wrap">
                                                <a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Facebook"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Github"><i className="fab fa-github"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" data-original-title="instagram"><i class="fab fa-instagram"></i></a>
                                                <a href="#" data-toggle="tooltip" data-placement="top" data-original-title="Linkedin"><i className="fab fa-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 row-item d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-row">
                                        <div className="card-icon"><i className="fa fa-envelope"></i></div>
                                        <div className="card-content ml-3">
                                            <h3>Correo</h3>
                                            <p><a href="mailto:erlisrivas@gmail.com">erlisrivas@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                               
                                <div className="col-md-6 row-item d-flex align-items-stretch">
                                    <div className="card-body d-flex flex-row">
                                        <div className="card-icon"><i className="fa fa-phone"></i></div>
                                        <div className="card-content ml-3">
                                            <h3>Telefono</h3>
                                            <p><a href="tel:+56 979946744">+56 979946744</a></p>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                           
                        </div>
                       
                        </div>

                        <div className="content-block contact-form-block">
                            <p className="mt-4 mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <form method="post" action="assets/php/mail.php" id="contact-form" name="contactus" className="contact-form m-5">    
                                <div className="form-row m-5">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input type="text" id="ContactFormName" name="name" className="form-control" placeholder="Name" required="" />
                                            <span className="error_msg" id="name_error"></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input type="email" id="ContactFormEmail" name="email" className="form-control" placeholder="Email" required="" />
                                            <span className="error_msg" id="email_error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="form-group">
                                            <input type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" class="form-control" placeholder="Phone Number" value="" required="" />
                                            <span className="error_msg" id="phone_error"></span>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">  
                                        <div className="form-group">
                                            <input type="text" id="ContactSubject" name="subject" className="form-control" placeholder="Subject" value="" required="" />
                                            <span className="error_msg" id="subject_error"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea id="ContactFormMessage" name="message" className="form-control" rows="4" placeholder="Type Your Message Here..."  required=""></textarea>
                                    <span className="error_msg" id="message_error"></span>
                                </div>
                                <div className="form-group submit mailsendbtn submit_btn mb-0">	
                                    <input type="submit" clasName="btn btn-primary cmnbtn" name="contactus" value="Send Message" />
                                    <div className="loading">
                                        <img src="assets/images/ajax-loader.gif" alt="loading"/>
                                    </div>
                                </div>
                            </form>
                            <div className="contactus_submit">
                                <div className="contact_us_text">
                                    <div className="response-msg"></div>
                                </div>
                            </div>
                        </div>
                   
                </section>
  )
}

export default Contacto