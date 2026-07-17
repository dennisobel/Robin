import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import agents from '../../../data/agents.json';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">The team</h5>
                        <h2 className="title">You get one consultant, start to finish</h2>
                        <p>
                            Not a call centre. The person who takes your brief is the person who
                            walks the houses with you and sits in the lease negotiation.
                        </p>
                    </div>
                    <div className="row">
                        {agents.map((a) => (
                            <div key={a.id} className="col-lg-6">
                                <div className="cxp-card">
                                    <div className="d-flex p-3">
                                        <img
                                            src={process.env.PUBLIC_URL + '/' + a.img}
                                            alt={a.name}
                                            style={{ width: 96, height: 96, borderRadius: 8, objectFit: 'cover' }}
                                        />
                                        <div className="ps-3">
                                            <h5 className="mb-1">{a.name}</h5>
                                            <span className="cxp-eyebrow">{a.post}</span>
                                            <p className="mb-2">{a.text}</p>
                                            <ul className="cxp-chips">
                                                {a.areas.map((area) => (
                                                    <li key={area} className="cxp-chip is-key">
                                                        <i className="fas fa-map-marker-alt" />{area}
                                                    </li>
                                                ))}
                                                <li className="cxp-chip">
                                                    <i className="fas fa-language" />{a.languages.join(', ')}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/contact" className="btn-custom primary">
                            Get matched with a consultant <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
