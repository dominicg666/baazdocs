import React from 'react';
import './environment.scss';
import { Link, resourceUrl } from '../../drivers/index';
const EnvironmentSetup = props => {

    return (
        <div >
            <div className="overview-body">
                <div className="container">
                    <h1>Environment Setup</h1>
                    <p>
                        To get started with Baaz Framework, the only requirement is a Node & npm environment.
                        <br />
                        Of course, a code editor is also required. Visual Studio Code is recommended. Visual Studio Code is a free, batteries-included text editor made by Microsoft.
                        </p>
                    <h4> Node & npm </h4>
                    <p>
                        Almost all tooling for modern JavaScript projects is based in Node.js. The <Link to="https://nodejs.org/en/download/">download page</Link> has prebuilt installation packages for all platforms. We recommend selecting the LTS version to ensure best compatibility.
                        <br />
                        Node is bundled with npm, the package manager for JavaScript.
                        <br />
                        To verify the installation, open a new terminal window and run:

                    </p>
                    <p>
                        <pre>
                            <code>$ node --version</code>
                        </pre>
                        <pre>
                            <code>$ npm --version</code>
                        </pre>
                    </p>
                    <h4> Git</h4>
                    <p>
                        Although not required, the version control system] Git is highly recommended.
                        <br />
                        Git is often accompanied by a Git Host, such as <Link to="https://github.com/">GitHub</Link>, in which case additional setup is required. Follow the tutorial from the Git Host's documentation to set up Git:
                        <br />
                        <ul> <li>GitHub: <Link to="https://help.github.com/en/articles/set-up-git">Set up Git</Link></li> <li>GitLab: <Link to="https://docs.gitlab.com/ee/topics/git/how_to_install_git">Installing Git</Link></li> <li>Bitbucket: <Link to="https://www.atlassian.com/git/tutorials/install-git">Install Git</Link></li> </ul>


                    </p>
                    <p>Otherwise, follow the <Link to="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">official installation instructions</Link>. The command-line utility can be downloaded from the <Link to="https://git-scm.com/downloads">download page</Link>.</p>

                    <p>To verify the installation, open a new terminal window and run:</p>
                    <p>
                        <pre>
                            <code>$ git --version</code>
                        </pre>
                    </p>
                </div>
            </div>
        </div >
    );
};


export default EnvironmentSetup;
