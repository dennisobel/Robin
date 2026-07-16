import React, { Component, Fragment } from 'react';
import Header from '../layouts/Headerfive';
import Content from '../sections/login/Content';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Login</title>
                <meta name="description" content="#" />
                <Header/>
                <Content/>
            </Fragment>
        );
    }
}

export default Login;