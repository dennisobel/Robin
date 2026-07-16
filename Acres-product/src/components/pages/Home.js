import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

class Home extends Component {
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

export default Home;