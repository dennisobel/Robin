import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/about/Content';

class About extends Component {
    render() {
        return (
            <Fragment>
                <title>About Expert Homes — why we only work with people arriving in Nairobi</title>
                <meta name="description" content="Expert Homes has settled 400+ diplomatic, UN and NGO families in Nairobi since 2019. Every home visited in person; the landlord pays our commission." />
                <Header/>
                <Breadcrumb breadcrumb={{ pagename: 'About us' }} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default About;