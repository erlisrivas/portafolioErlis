import React from 'react'


const NavBar = () => {
  return (
   
    
        
        <header id="header" className="site-header fixed-top">
            
            <div className="container">
                
                <div className="row align-items-center">
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6">
                        <div className="logo navbar-brand p-0 m-0 w-100">
                            <a className="text-logo" href=""></a>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-6 col-6">
                        
                        <div id="navigation" className="navigation float-lg-right">
                        <nav className="navbar navbar-expand-lg p-0">
                                <button className="menu-toggle menu-toggle-line d-lg-none" type="button"><span></span><span></span><span></span></button>
                                <div className="navigation-menu mobile-menu-hide" id="navbarMenu">
                                    <a href="#" className="closeNav-btn d-lg-none clearfix" id="closeNav" title="Close"><span className="menu-close mr-2">Close</span><i className="fa fa-close" aria-hidden="true"></i></a>
                                    <ul className="navbar-nav align-items-center justify-content-end w-100">
                                        <li className="nav-item"><a data-scroll className="nav-link active" href="#home"><i className="fa fa-home mr-1"></i><span className="link-text">Home</span></a></li>
                                        <li className="nav-item"><a data-scroll className="nav-link" href="#about"><i className="fa fa-user mr-1"></i><span className="link-text">Acerca de mi</span></a></li>
                                        <li className="nav-item"><a data-scroll className="nav-link" href="#portfolio"><i className="fa fa-briefcase mr-1"></i><span className="link-text">Portafolio</span></a></li>
                                        <li className="nav-item"><a data-scroll className="nav-link" href="#contact"><i className="fa fa-address-book mr-1"></i><span className="link-text">Contacto</span></a></li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                       
                    </div>
                </div>
               
            </div>
            
        </header>
        
        
  )
}

export default NavBar
