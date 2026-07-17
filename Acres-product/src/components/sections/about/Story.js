import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Story extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                className="img-fluid rounded"
                                src={process.env.PUBLIC_URL + '/assets/img/pages/about-story.jpg'}
                                alt="The Expert Homes team in their Gigiri office"
                            />
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <span className="cxp-eyebrow">Why we exist</span>
                            <h2 className="title">We started because the first month is the hardest</h2>
                            <p>
                                Expert Homes began in 2019 in a Gigiri office, after watching too many
                                families arrive on a Sunday, start work on the Monday, and spend
                                their first three months in a serviced apartment looking at houses
                                that were never going to work.
                            </p>
                            <p>
                                We only work with people arriving in Nairobi from somewhere else.
                                That focus is the whole point: we know which compounds have a
                                generator that actually starts, which school has places in Year 4,
                                and which lease clause will cost you your deposit in two years.
                            </p>
                            <ul className="cxp-chips mt-3">
                                <li className="cxp-chip is-key"><i className="fas fa-check" />Every home visited in person</li>
                                <li className="cxp-chip is-key"><i className="fas fa-check" />Landlord pays our commission</li>
                                <li className="cxp-chip is-key"><i className="fas fa-check" />One consultant, start to finish</li>
                            </ul>
                            <Link to="/consultants" className="btn-custom primary mt-4">
                                Meet the team <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Story;
