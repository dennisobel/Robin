import React, { Component } from 'react';
import Slider from 'react-slick';
import testimonials from '../../../data/testimonial.json';
import { processRatingStars } from '../../../helper/helper';

class Testimonials extends Component {
    render() {
        const settings = {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
        };

        return (
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">In their words</h5>
                        <h2 className="title">Families who've already arrived</h2>
                    </div>
                    <Slider {...settings} className="testimonials-slider">
                        {testimonials.map((item) => (
                            <div key={item.id}>
                                <div className="testimonial-item p-3">
                                    <div className="testimonial-body">
                                        <div className="rating-wrapper">
                                            {processRatingStars(item.rating)}
                                        </div>
                                        <h5>{item.title}</h5>
                                        <p>{item.comment}</p>
                                    </div>
                                    <div className="testimonial-footer listing-author">
                                        <img src={process.env.PUBLIC_URL + '/' + item.authorimg} alt={item.author} />
                                        <div className="listing-author-body">
                                            <p><strong>{item.author}</strong></p>
                                            <span className="listing-date">{item.post}</span>
                                        </div>
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

export default Testimonials;
