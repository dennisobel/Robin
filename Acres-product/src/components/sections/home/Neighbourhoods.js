import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import neighbourhoods from '../../../data/neighbourhoods.json';
import { usd } from '../../../helper/listings';

/**
 * The question every arriving expat asks first is "where should we live?",
 * not "what's available?". So the homepage leads with neighbourhoods, framed
 * by the two things that actually decide it: the commute and the schools.
 */
class Neighbourhoods extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Where to live</h5>
                        <h2 className="title">Nairobi, explained</h2>
                        <p>
                            Six areas cover almost every posting. The trade-off is nearly always
                            the same one: minutes to the office against space for the family.
                        </p>
                    </div>
                    <div className="row">
                        {neighbourhoods.map((n) => (
                            <div key={n.id} className="col-lg-4 col-md-6">
                                <Link
                                    to={`/search?neighbourhood=${encodeURIComponent(n.name)}`}
                                    className="karibu-hood"
                                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${n.img})` }}
                                >
                                    <div className="karibu-hood-body">
                                        <h5>{n.name}</h5>
                                        <span>{n.tagline}</span>
                                        <div className="karibu-hood-meta">
                                            <span><i className="fas fa-car" />{n.commute}</span>
                                            <span><i className="fas fa-tag" />from {usd(n.from)}/mo</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Neighbourhoods;
