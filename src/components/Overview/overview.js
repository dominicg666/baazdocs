import React from 'react';
import './overview.scss';
import { Link, resourceUrl } from '../../drivers/index'

const BANNER = require("../../assets/img/banner.png").default;

const Overview = props => {

    return (
        <div >
            <div className="banner-outer">
                <div className="container">
                    <img className="banner" src={BANNER} />
                </div>
            </div>
            <div className="overview-body">
                <div className="container">
                    <h1>Overview</h1>
                    <p>
                        Baaz Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like React.
                    </p>
                    <p>
                        Get started building by <Link to={resourceUrl('/cli')}>installing Baaz</Link> or following our First App Tutorial to learn the main concepts.
                    </p>
                </div>
            </div>
        </div >
    );
};


export default Overview;
