import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Content from '../sections/register/Content';

class Register extends Component {
    render() {
        return (
            <Fragment>
                <title>Create an account — Expert Homes</title>
                <meta name="description" content="Save homes, share your shortlist and get new Nairobi listings that match your brief." />
                <Header/>
                <Content/>
            </Fragment>
        );
    }
}

export default Register;