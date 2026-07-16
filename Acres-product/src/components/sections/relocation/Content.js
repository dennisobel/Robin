import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import services from '../../../data/services.json';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="section">
                    <div className="container">
                        <div className="section-title-wrap section-header">
                            <h5 className="custom-primary">Relocation support</h5>
                            <h2 className="title">The part that isn't the house</h2>
                            <p>
                                Finding the home is a fortnight's work. Everything around it —
                                schools, permits, the container, the generator that fails in week
                                three — is what actually decides how the posting goes. We do both.
                            </p>
                        </div>
                        <div className="row">
                            {services.map((s) => (
                                <div key={s.id} className="col-lg-4 col-md-6">
                                    <div className="acr-infographic-item">
                                        <i className={'flaticon-' + s.icon} />
                                        <div className="acr-infographic-item-body">
                                            <h5>{s.title}</h5>
                                            <p>{s.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section light-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <span className="karibu-eyebrow">Who we work with</span>
                                <h2 className="title">Built around posting cycles</h2>
                                <p>
                                    Most of our families arrive in two waves — July and January —
                                    on two or three year contracts with the UN, an embassy, an NGO
                                    or an international school. We plan around that calendar, which
                                    is why we start talking to you months before you land.
                                </p>
                                <ul className="karibu-chips mt-3">
                                    <li className="karibu-chip is-key"><i className="fas fa-check" />UN agencies</li>
                                    <li className="karibu-chip is-key"><i className="fas fa-check" />Embassies &amp; high commissions</li>
                                    <li className="karibu-chip is-key"><i className="fas fa-check" />International NGOs</li>
                                    <li className="karibu-chip is-key"><i className="fas fa-check" />International schools</li>
                                    <li className="karibu-chip is-key"><i className="fas fa-check" />Corporate postings</li>
                                </ul>
                                <Link to="/contact" className="btn-custom primary mt-4">
                                    Talk to a consultant <i className="fas fa-arrow-right" />
                                </Link>
                            </div>
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <img
                                    className="img-fluid rounded"
                                    src={process.env.PUBLIC_URL + '/assets/img/scenes/office.svg'}
                                    alt="Relocation consultants in Nairobi"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;
