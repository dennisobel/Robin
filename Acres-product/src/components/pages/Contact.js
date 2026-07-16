import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <title>Contact Karibu — Gigiri, Nairobi</title>
                <meta name="description" content="Send us your posting dates and what the family needs. We reply with a shortlist within two working days." />
                <Header/>
                <Breadcrumb breadcrumb={{ pagename: 'Contact' }} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;