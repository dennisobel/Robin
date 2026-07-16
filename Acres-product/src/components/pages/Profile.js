import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Userbreadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/profile/Content';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | My Account</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Profile;