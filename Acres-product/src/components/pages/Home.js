import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <title>Karibu — Nairobi homes for expats and diplomats</title>
                <meta
                    name="description"
                    content="Furnished homes in Gigiri, Runda, Karen and Westlands for families posted to Nairobi. Near the UN, the embassies and the international schools."
                />
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;
