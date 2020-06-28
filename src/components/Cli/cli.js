import React from 'react';
import './cli.scss';
import { Link, resourceUrl } from '../../drivers/index';
const Overview = props => {

    return (
        <div >
            <div className="overview-body">
                <div className="container">
                    <h1>Installing Baaz</h1>
                    <p>
                        Baaz are created and developed primarily through the Baaz command-line utility.
                        The Baaz CLI is the preferred method of installation, as it offers a wide range of dev tools and help options along the way. It is also the main tool through which to run the app and connect it to other services, such as Baaz Appflow.
                    </p>
                    <h4>Install the Baaz CLI</h4>
                    <p>
                        Before proceeding, make sure your computer has  <Link to={resourceUrl('/environment-setup')}>Node.js and Yarn</Link> installed.
                        <Link to={resourceUrl('/environment-setup')}>See these instructions</Link> to set up an environment for Baaz.
                        <br />
                        Install the Baaz CLI with npm:
                        <br />

                    </p>
                    <p>
                        <pre>
                            <code>$ npm install -g  @baaz/cli</code>
                        </pre>
                    </p>
                    <p>
                        If there was a previous installation of the Baaz CLI, it will need to be uninstalled due to a change in package name.
                    </p>
                    <p>
                        <pre>
                            <code>$ npm uninstall -g  @baaz/cli</code>
                        </pre>
                        <pre>
                            <code>$ npm install -g  @baaz/cli</code>
                        </pre>
                    </p>
                    <h6>
                        Start an Project
                    </h6>
                    <p>
                        Get started with the Baaz start command:
                    </p>
                    <p>
                        <pre>
                            <code>$ baaz --init</code>
                        </pre>
                    </p>
                    <h6>
                        Run the Project
                    </h6>
                    <p>
                        <pre>
                            <code>$ yarn run watch</code>
                        </pre>
                    </p>
                    <h6>
                        Build the Project
                    </h6>
                    <p>
                        <pre>
                            <code>$ yarn run build</code>
                        </pre>
                    </p>
                </div>
            </div>
        </div >
    );
};


export default Overview;
