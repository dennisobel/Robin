import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const images = [
    { img: 'assets/img/scenes/auth-1.svg', title: "Claire, UNEP — Runda", text: "We were still in Geneva when the walkthrough videos arrived. We picked the house on a Tuesday and moved in straight from the airport." },
    { img: 'assets/img/scenes/auth-2.svg', title: "Michael, German Embassy — Gigiri", text: "They talked us out of the house we loved because the generator hadn't run in a year. That cost them a commission and won our trust." },
    { img: 'assets/img/scenes/auth-3.svg', title: "Sarah, INGO — Rosslyn", text: "We were set on Karen until they showed us what the school run actually looks like at 7am. Our daughter now walks to school." },
];

class Content extends Component {
    render() {
        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            dotsClass: "d-flex slick-dots",
        }
        return (
            <div className="acr-auth-container">
                <div className="acr-auth-content">
                    <form>
                        <div className="auth-text">
                            <h3>Create your account</h3>
                            <p>Save homes, share your shortlist with your partner, and get new listings that match your brief.</p>
                        </div>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control form-control-light" placeholder="Username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control form-control-light" placeholder="Email Address" name="email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control form-control-light" placeholder="Password" name="password" />
                        </div>
                        <button type="submit" className="btn-custom secondary btn-block">Register</button>
                        <div className="auth-seperator">
                            <span>OR</span>
                        </div>
                        <div className="social-login">
                            <button type="button" className="acr-social-login facebook"><i className="fab fa-facebook-f" /> Continue with Facebook </button>
                            <button type="button" className="acr-social-login google"><i className="fab fa-google" /> Continue with Google</button>
                        </div>
                        <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link> </p>
                    </form>
                </div>
                <div className="acr-auth-bg">
                    <Slider className="acr-auth-bg-slider acr-cs-bg-slider" {...settings}>
                        {images.map((item, i) => (
                            <div key={i}>
                                <div className="acr-cs-bg-item bg-cover bg-center" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.img + ")" }} >
                                    <div className="acr-auth-quote">
                                        <h6>{item.title}</h6>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Content;