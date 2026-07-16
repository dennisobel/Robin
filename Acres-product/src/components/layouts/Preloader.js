import React, { Component } from 'react';

/**
 * Full-screen white overlay shown until the page is ready.
 *
 * This component is lazy-loaded, so window's "load" event can already have
 * fired by the time it mounts — in which case a plain addEventListener would
 * never run and the overlay would cover the site permanently. Check
 * readyState first and only listen if we're genuinely still loading.
 */
class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = { fetchSuccess: false };
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        if (document.readyState === 'complete') this.onLoad();
        else window.addEventListener('load', this.onLoad);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.onLoad);
    }

    onLoad() {
        this.setState({ fetchSuccess: true });
    }

    render() {
        const hidden = this.state.fetchSuccess ? ' hidden' : '';
        return (
            <div className={`acr-preloader${hidden}`}>
                <div className="acr-preloader-inner">
                    <div className="lds-grid"><div /><div /><div /><div /><div /><div /><div /><div /><div /></div>
                </div>
            </div>
        );
    }
}

export default Preloader;
