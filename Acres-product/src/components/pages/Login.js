import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Content from '../sections/login/Content';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <title>Sign in — Expert Homes</title>
                <meta name="description" content="Sign in to see your shortlist and the homes your consultant has sent you." />
                <Header/>
                <Content/>
            </Fragment>
        );
    }
}

export default Login;