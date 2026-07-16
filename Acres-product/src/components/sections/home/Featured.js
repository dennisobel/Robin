import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Listingcard from '../../layouts/Listingcard';
import listings from '../../../data/listings.json';

class Featured extends Component {
    render() {
        const featured = listings.filter((l) => l.featured).slice(0, 3);
        return (
            <div className="section light-bg">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">Move-in ready</h5>
                        <h2 className="title">Homes we'd show you first</h2>
                        <p>Each one visited in person, with power, water and security checked.</p>
                    </div>
                    <div className="row">
                        {featured.map((item) => (
                            <div key={item.id} className="col-lg-4 col-md-6">
                                <Listingcard item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="/search" className="btn-custom primary">
                            See all {listings.length} homes on the map <i className="fas fa-arrow-right" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Featured;
