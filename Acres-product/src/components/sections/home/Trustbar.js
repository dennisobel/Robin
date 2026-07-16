import React, { Component } from 'react';

const stats = [
    { value: '400+', label: 'Families settled since 2019' },
    { value: '9', label: 'Embassies & UN agencies we work with' },
    { value: '14 days', label: 'Average time from brief to signed lease' },
    { value: '100%', label: 'Homes vetted in person before listing' },
];

class Trustbar extends Component {
    render() {
        return (
            <div className="karibu-trust">
                <div className="container">
                    <div className="row">
                        {stats.map((s, i) => (
                            <div key={i} className="col-lg-3 col-6 mb-3 mb-lg-0">
                                <strong>{s.value}</strong>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Trustbar;
