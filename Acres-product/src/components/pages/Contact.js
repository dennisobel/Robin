import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/contact/Content';

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Contact Us</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Contact Us'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Contact;