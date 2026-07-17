import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, NavLink } from 'react-bootstrap';
import Accordiontoggle from '../../layouts/Accordiontoggle';
import faq from '../../../data/faq.json';

class Content extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Before you ask</h5>
                        <h2 className="title">The questions every family asks</h2>
                        <p>
                            Ten things we end up explaining on almost every first call. If yours
                            isn't here, ask a consultant — we answer honestly, including when the
                            answer is "don't take that house".
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <Accordion defaultActiveKey="0" className="with-gap">
                                {faq.map((item, i) => (
                                    <Card key={item.id}>
                                        <Card.Header>
                                            <Accordiontoggle as={NavLink} variant="link" eventKey={String(i)}>
                                                {item.q}
                                            </Accordiontoggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={String(i)} className="collapseparent">
                                            <Card.Body>
                                                <p className="mb-0">{item.a}</p>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </div>

                        <div className="col-lg-4">
                            <div className="sidebar sidebar-right">
                                <img
                                    className="img-fluid rounded mb-4"
                                    src={process.env.PUBLIC_URL + '/assets/img/pages/faq-side.jpg'}
                                    alt="A family settling into their new Nairobi home"
                                />
                                <div className="sidebar-widget">
                                    <h5>Still deciding?</h5>
                                    <p className="text-muted">
                                        Send us your posting dates and the ages of your children.
                                        We'll come back with the two or three neighbourhoods that
                                        actually fit, and why.
                                    </p>
                                    <Link to="/contact" className="btn-custom primary btn-block">
                                        Ask a consultant
                                    </Link>
                                </div>
                                <div className="sidebar-widget">
                                    <h5>Start on the map</h5>
                                    <p className="text-muted">
                                        Every home is filtered by school, budget and lease length.
                                    </p>
                                    <Link to="/search" className="btn-custom secondary btn-block">
                                        Find a home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
