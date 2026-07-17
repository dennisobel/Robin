import React, { useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { usd } from '../../../helper/listings';
import { useShortlist } from '../../../helper/shortlist';

const NAIROBI = [-1.2705, 36.79];

function pin(item, active, saved) {
    const cls = ['cxp-pin', active ? 'is-active' : '', saved ? 'is-saved' : ''].join(' ').trim();
    return L.divIcon({
        className: '',
        html: `<div class="${cls}">${usd(item.monthlyprice)}</div>`,
        iconSize: [64, 26],
        iconAnchor: [32, 26],
    });
}

/** Keep the viewport on whatever the filters left behind. */
function Fitbounds({ items }) {
    const map = useMap();
    useEffect(() => {
        if (!items.length) return;
        const bounds = L.latLngBounds(items.map((i) => [i.lat, i.lng]));
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14 });
    }, [items, map]);
    return null;
}

function Searchmap({ items, activeId, onHover }) {
    const saved = useShortlist();

    return (
        <MapContainer className="map" center={NAIROBI} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Fitbounds items={items} />
            {items.map((item) => (
                <Marker
                    key={item.id}
                    position={[item.lat, item.lng]}
                    icon={pin(item, item.id === activeId, saved.includes(item.id))}
                    eventHandlers={{
                        mouseover: () => onHover && onHover(item.id),
                        mouseout: () => onHover && onHover(null),
                    }}
                >
                    <Popup>
                        <div className="cxp-popup">
                            <img src={process.env.PUBLIC_URL + '/' + item.gridimg} alt={item.title} />
                            <div className="cxp-popup-body">
                                <h6> <Link to={`/listing/${item.id}`}>{item.title}</Link> </h6>
                                <span className="cxp-card-hood">
                                    <i className="fas fa-map-marker-alt" />{item.neighbourhood}
                                </span>
                                <div className="cxp-card-meta mt-2 mb-0">
                                    <span><i className="flaticon-bedroom" />{item.beds}</span>
                                    <span><i className="flaticon-bathroom" />{item.bathrooms}</span>
                                    <span>{usd(item.monthlyprice)}/mo</span>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}

export default Searchmap;
