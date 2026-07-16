import React, { Component, Fragment } from 'react';
import Header from '../layouts/Headerfive';
import Content from '../sections/register/Content';

class Register extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Register</title>
                <meta name="description" content="#" />
                <Header/>
                <Content/>
            </Fragment>
        );
    }
}

export default Register;