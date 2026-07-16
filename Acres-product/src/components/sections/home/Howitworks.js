import React, { Component } from 'react';

const steps = [
    {
        n: 1,
        icon: 'clipboard',
        title: 'Tell us the brief',
        text: 'Your start date, family size, school of choice and budget. Ten minutes on a call, usually before you fly.',
    },
    {
        n: 2,
        icon: 'sales-agent',
        title: 'We shortlist and film',
        text: 'We visit each home, check the generator and borehole, and send you walkthrough videos so you can decide from abroad.',
    },
    {
        n: 3,
        icon: 'house',
        title: 'We settle you in',
        text: 'Lease negotiated in your name, deposit handled, utilities and internet connected before your container lands.',
    },
];

class Howitworks extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="section-title-wrap section-header">
                        <h5 className="custom-primary">How it works</h5>
                        <h2 className="title">Sorted before you arrive</h2>
                    </div>
                    <div className="row">
                        {steps.map((s) => (
                            <div key={s.n} className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                <div className="karibu-step">
                                    <div className="karibu-step-num">{s.n}</div>
                                    <h5>{s.title}</h5>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Howitworks;
