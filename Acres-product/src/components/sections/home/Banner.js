import React, { Component } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import Select2 from '../../layouts/Select2';
import listings from '../../../data/listings.json';
import { neighbourhoodlist, budgetlist, bedslist } from '../../../data/select.json';
import { usd } from '../../../helper/listings';

// Nairobi, centred between Gigiri/Runda in the north and Kilimani in the south.
const NAIROBI = [-1.2705, 36.79];

function priceIcon(item) {
    return L.divIcon({
        className: '',
        html: `<div class="karibu-pin">${usd(item.monthlyprice)}</div>`,
        iconSize: [64, 26],
        iconAnchor: [32, 26],
    });
}

/**
 * Map-first hero: an expat arriving in Nairobi does not know the neighbourhood
 * names yet, so the map does the explaining and the search card collects only
 * the three things they do know — area, budget, family size.
 */
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            neighbourhood: neighbourhoodlist[0],
            budget: budgetlist[0],
            beds: bedslist[0],
        };
    }

    // Hand the chosen filters to /search via the query string.
    searchHref() {
        const p = new URLSearchParams();
        const { neighbourhood, budget, beds } = this.state;
        if (!/^Any/.test(neighbourhood)) p.set('neighbourhood', neighbourhood);
        if (!/^Any/.test(budget)) p.set('budget', budget);
        if (!/^Any/.test(beds)) p.set('beds', beds);
        const q = p.toString();
        return q ? `/search?${q}` : '/search';
    }

    render() {
        return (
            <div className="karibu-hero">
                <div className="banner-map">
                    <MapContainer className="map" center={NAIROBI} zoom={12} scrollWheelZoom={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {listings.map((item) => (
                            <Marker key={item.id} position={[item.lat, item.lng]} icon={priceIcon(item)}>
                                <Popup>
                                    <div className="karibu-popup">
                                        <img src={process.env.PUBLIC_URL + '/' + item.gridimg} alt={item.title} />
                                        <div className="karibu-popup-body">
                                            <h6> <Link to={`/listing/${item.id}`}>{item.title}</Link> </h6>
                                            <span className="karibu-card-hood">
                                                <i className="fas fa-map-marker-alt" />{item.neighbourhood}
                                            </span>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

                <div className="karibu-hero-overlay">
                    <div className="container">
                        <div className="karibu-hero-card">
                            <span className="karibu-eyebrow">Posted to Nairobi?</span>
                            <h1>Find a home before you land.</h1>
                            <p>
                                Furnished homes near the UN, the embassies and the international
                                schools — with the generator, borehole and security already sorted.
                            </p>

                            <div className="row">
                                <div className="col-md-4 form-group acr-custom-select">
                                    <label>Neighbourhood</label>
                                    <Select2
                                        data={neighbourhoodlist}
                                        value={this.state.neighbourhood}
                                        onChange={(e) => this.setState({ neighbourhood: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-4 form-group acr-custom-select">
                                    <label>Budget</label>
                                    <Select2
                                        data={budgetlist}
                                        value={this.state.budget}
                                        onChange={(e) => this.setState({ budget: e.target.value })}
                                    />
                                </div>
                                <div className="col-md-4 form-group acr-custom-select">
                                    <label>Bedrooms</label>
                                    <Select2
                                        data={bedslist}
                                        value={this.state.beds}
                                        onChange={(e) => this.setState({ beds: e.target.value })}
                                    />
                                </div>
                            </div>

                            <Link to={this.searchHref()} className="btn-custom primary btn-block">
                                Search {listings.length} homes <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
