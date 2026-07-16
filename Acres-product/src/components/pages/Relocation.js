import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/relocation/Content';

class Relocation extends Component {
    render() {
        return (
            <Fragment>
                <title>Relocation support — Karibu</title>
                <meta
                    name="description"
                    content="Schools, visas, shipping, utilities and lease negotiation for families posted to Nairobi."
                />
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Relocation support' }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Relocation;
