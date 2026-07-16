import React, { Component, Fragment } from 'react';
import Header from '../layouts/Headerthree';
import Footer from '../layouts/Footertwo';
import Content from '../sections/homethree/Content';

class Homethree extends Component {
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

export default Homethree;