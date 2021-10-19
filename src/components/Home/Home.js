
import React, { useEffect, useState } from 'react';
import Featurecart from '../Featurecart/Featurecart';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('./feature.json')
            .then(res => res.json())
            .then(data => setFeatures(data))


    }, []);



    return (
        <div className="">
            <div className='banner-container py-5 '>
                <div className="container pb-5">
                    <div className="row mt-lg-5 mb-lg-5 ">
                        <div className="col-lg-6 col-12">
                            <img className='rounded w-100 ' src="./banner.jpg" alt="web-banner" />
                        </div>

                        <div className="col-lg-6 col-12">
                            <h3 className="site-name ms-lg-5 mt-4">Muckta Dental Care</h3>
                            <p className="ms-lg-5 site-discription"> <strong>Muckta Dental Care</strong> focus on patient education to prevent disease and provide treatment options for the same procedures offered in general and (some) specialty practices.   <strong> Muckta Dental Care</strong> is a clinic houses all dental equipment and tools in one place and is staffed by dentists, dental specialists, dental assistants, and dental hygienists. Low-cost or free treatments are often performed. </p>
                            <br />
                            <NavLink to = "/about"> <button className="ms-lg-5 px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Learn more</button></NavLink>
                        </div>

                    </div>
                </div>
            </div>

            {/*---------------- spcility section Start ----------- */}

            <div className="container py-lg-5  py-4 w-50 spicility-section">
                <div className="row text-center text-white fw-bold ">
                    <div className="col-12 col-lg-4 "> 
                     <img src="./medical.png" alt="" width = "80px" />
                     <h5>BEST TECHNOLOGY</h5>
                    </div>
                    <div className="col-12 col-lg-4 first-aid-icon">
                        <img src="./firstAid.png" alt="" width="80px" />
                        <h5>FIRST AID</h5>
                    </div>
                    <div className="col-12 col-lg-4">
                        <img src="./doctor.png" alt="" width="80px" />
                        <h5>24/7 BEST DOCTORS</h5>
                    </div>
                </div>

            </div>

            {/* ------------------About our hospital ------------------------ */}
            <div className="container text-center fw-bold mt-5">
                <h1  className = "fw-bold text-dark my-lg-5 my-3 py-lg-5 py-3"> About Our Hospital </h1>

                <div className="w-75  mx-auto">
                    <img className = "w-75" src="./about.svg" alt="" />
                </div>
                <div className="w-75 text-seondary mt-4 mx-auto text-center">
                    <p className = "text-center">We are the best dental treatment provider in our society. We treat our clint as our family memeber. Our goal is make our customer happy . We alwas provide  service as low price as we can . No other hospital can give this type of service in this cost. "Brush your teeth every day and take low sogur food and keep smiling..."</p>
                    <button className="ms-lg-5 mt-4 px-lg-5 py-lg-2 px-4 py-2 primery-btn rounded ">Read more</button>
                </div>
            </div>

            {/* --------------------Our services--------------------- */}
            <div className="container my-3 my-lg-5">
                <h2 className ="fw-bold my-2 my-lg-5 py-5 text-center">Our Popular Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        features.map(feature => <Featurecart
                            /* ------Key for error handeling------ */
                            key={feature._id}
                            /* ------Sending Props for homeCard------ */
                            feature={feature}
                        > </Featurecart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;