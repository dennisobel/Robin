import React, { Component } from 'react';

const counter = [
    { icon: "house", value: 412, title: "Families settled" },
    { icon: "company", value: 9, title: "Agencies & missions" },
    { icon: "sales-agent", value: 14, title: "Avg. days to signed lease" },
    { icon: "clipboard", value: 6, title: "Years in Gigiri" },
];

class Counter extends Component {
    render() {
        return (
            <div
                className="section section-padding bg-cover bg-center bg-parallax dark-overlay dark-overlay-2"
                style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/scenes/counter.svg)" }}
            >
                <div className="container">
                    <div className="row">
                        {counter.map((item, i) => (
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                                <div className="acr-infographic-item">
                                    <i className={"flaticon-" + item.icon} />
                                    <h4>{new Intl.NumberFormat().format(item.value)}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Counter;
