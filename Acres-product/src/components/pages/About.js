import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';

class About extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | About Us</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'About Us'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;