import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/shortlist/Content';

class Shortlist extends Component {
    render() {
        return (
            <Fragment>
                <title>Your shortlist — Karibu</title>
                <meta name="description" content="The Nairobi homes you've saved, ready to send to your relocation consultant." />
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Your shortlist' }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Shortlist;
