import React, { Component, Fragment } from 'react';
import Header from '../layouts/Headerfour';
import Footer from '../layouts/Footerthree';
import Content from '../sections/homefour/Content';

class Homefour extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Homepage</title>
                <meta name="description" content="#" />
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Homefour;