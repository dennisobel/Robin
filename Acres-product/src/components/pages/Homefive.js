import React, { Component, Fragment } from 'react';
import Header from '../layouts/Headertwo';
import Footer from '../layouts/Footer';
import Content from '../sections/homefive/Content';

class Homefive extends Component {
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

export default Homefive;