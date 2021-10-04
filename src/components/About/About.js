import React from 'react';
import img from '../../images/about.png'

const About = () => {
    return (
        <div className="container mb-5 pb-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="row mt-5">
                        <div className="col-md-5">
                           <h3 className="text-success text-start">Life Mentoring</h3>
                           <p className="text-start lead">Get some soul healing and guidence for your future career and vocational directions</p>
                        </div>
                        <div className="col-md-5">
                        <h3 className="text-success text-start">Self Development</h3>
                        <p className="text-start lead">Develop skills for career of various majors mostly on web development.We have the best instructor from Bangladesh.</p>
                        </div>
                        <div className="row mt-5 pt-2">
                            <div className="col-md-5">
                                <h3 className="text-success text-start">Ask Consultency</h3>
                                <p className="text-start lead">Make a reservation with our special consultant team to learn what should you learn.</p>
                            </div>
                            <div className="col-md-5">
                            <h3 className="text-success text-start">Remote Learning</h3>
                                <p className="text-start lead">Learn from anywhere in the world,that is why it's called E-School.If you have a pc or 
                                laptop and a solid internet connection you are ready to go.</p>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="col-md-6">
                    <img src={img} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
        
    );
};

export default About;