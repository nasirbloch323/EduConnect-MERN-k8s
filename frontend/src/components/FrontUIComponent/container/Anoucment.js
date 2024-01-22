import React from "react";
import img from '../../../../src/assets/about.jpg';
import './anouncment.css'
import { Link } from "react-router-dom";
function Anoucment() {
    return (
        <>
            <div className="container anouncment">
            <h1 className="a-title">
            Latest <strong className="a-titles">Annocment</strong>
          </h1>      
                <div className="row">
                    <div className="p-1 a-card col-md-3 " data-aos="zoom-in-up">
                        <div class=" card1" >
                            <img src={img} class="card-img-top " alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="news-header-btn ">Learn More</Link>
                            </div>

                        </div>
                    </div>
                    <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">
                        <div class=" card1" >
                            <img src={img} class="card-img-top " alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="news-header-btn">Learn More</Link>
                            </div>

                        </div>
                    </div>
                    <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">
                        <div class=" card1" >
                            <img src={img} class="card-img-top " alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="news-header-btn">Learn More</Link>
                            </div>

                        </div>
                    </div>
                    <div className="p-1 a-card col-md-3" data-aos="zoom-in-up">
                        <div class=" card1" >
                            <img src={img} class="card-img-top " alt="..." />
                            <div class="card-body p-2">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="news-header-btn">Learn More</Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Anoucment;
