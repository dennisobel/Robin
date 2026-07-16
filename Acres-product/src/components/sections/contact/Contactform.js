import React, { Component } from 'react';
import Formbox from '../../layouts/Formbox';

class Contactform extends Component {
    render() {
        return (
            <div className="section pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 mb-lg-30">
                            <div
                                className="acr-locations bg-bottom bg-norepeat"
                                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/misc/bldg.png)" }}
                            >
                                <img src={process.env.PUBLIC_URL + "/assets/img/scenes/contact.svg"} alt="Karibu office, Gigiri" />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Nairobi</h5>
                                            <h5>Kenya</h5>
                                            <div className="acr-location-address">
                                                <p>Village Market, Limuru Road, Gigiri</p>
                                                <a href="tel:+254200000000">+254 20 000 0000</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="acr-location">
                                            <h5>Office hours</h5>
                                            <h5>GMT+3</h5>
                                            <div className="acr-location-address">
                                                <p>Mon–Fri, 8am–7pm<br />Sat, 9am–1pm</p>
                                                <a href="mailto:hello@karibuhomes.co.ke">hello@karibuhomes.co.ke</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="section-title-wrap section-header">
                                <h5 className="custom-primary">Send us your brief</h5>
                                <h2 className="title">Tell us when you land</h2>
                                <p>
                                    The more you tell us now, the less we ask later. We reply within
                                    two working days with homes that actually fit — or with an honest
                                    answer about what your budget will and won't reach.
                                </p>
                            </div>
                            <div className="comment-form">
                                <Formbox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactform;
