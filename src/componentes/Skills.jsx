import React from 'react'
import '../assets/css/skill.css';

const Skills = () => {
  return (
    <>
        <div className="content-block skills m-5">
            <h4 className="block-title text-center text-uppercase mb-4 pb-2">Skills</h4>
            
            <div className="row ">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="skill-item">
                        <p className="skill-name">Html</p>  
                        <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">95%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">Css</p>
                        <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">95%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">JavaScript</p>
                        <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">80%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">Sass</p>
                        <div className="skill-bar">
                        <span className="skill-per sass">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="skill-item mt-4 mt-lg-0">
                        <p className="skill-name">WordPress</p>
                        <div className="skill-bar">
                        <span className="skill-per wpress">
                            <span className="tooltip">95%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">React</p>
                        <div className="skill-bar">
                        <span className="skill-per react">
                            <span className="tooltip">95%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">Web Design</p>
                        <div className="skill-bar">
                        <span className="skill-per WD">
                            <span className="tooltip">90%</span>
                        </span>
                        </div>
                    </div>
                    <div className="skill-item mt-4">
                        <p className="skill-name">Web Development</p>
                        <div className="skill-bar">
                        <span className="skill-per Wd">
                            <span className="tooltip">70%</span>
                        </span>
                        </div>
                    </div>  
                </div>
            </div>
           
        </div>
    </>
  )
}

export default Skills