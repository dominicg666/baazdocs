import React, { useCallback } from 'react';
import './modal.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ModalDefault from 'buikit/lib/ModalDefault';
import { useAppContext } from '@baaz/adapter/context/app'


const ModalUI = props => {

    const [{ }, { toggleDrawer, closeDrawer }] = useAppContext();

    const clickHandler = useCallback(() => {
        toggleDrawer('modal');
    }, [])

    const codeString = `
import React, { useCallback } from 'react';
import './modal.scss';
import ModalDefault from 'buikit/lib/ModalDefault';
import { useAppContext } from '@baaz/adapter/context/app'


const ModalUI = props => {

    const [{ }, { toggleDrawer, closeDrawer }] = useAppContext();

    const clickHandler = useCallback(() => {
        toggleDrawer('modal');
    }, [])

    return (
        <div >

                    <h5>Sample</h5>
                    <ModalDefault>
                        <div class="modal-content">
                            <div className="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeDrawer}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className=" modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className=" modal-footer">
                                <button type="button" class="btn btn-primary">Save changes</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeDrawer}>Close</button>
                            </div>
                        </div>
                    </ModalDefault>
                    <button type="button" className="btn btn-success" onClick={clickHandler}>Click Here</button>
                   

        </div >
    );
};


export default ModalUI;`;
    return (
        <div >
            <div className="overview-body">
                <div className="container">
                    <h1>Modal</h1>
                    <p className="my-4">
                        Below is a static modal example (meaning its position and display have been overridden). Included are the modal header, modal body (required for padding), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
                    </p>

                    <h5 className="mb-4">Sample</h5>
                    <ModalDefault>
                        <div class="modal-content">
                            <div className="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={closeDrawer}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className=" modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className=" modal-footer">
                                <button type="button" class="btn btn-primary">Save changes</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeDrawer}>Close</button>
                            </div>
                        </div>
                    </ModalDefault>
                    <button type="button" className="btn btn-success" onClick={clickHandler}>Click Here</button>
                    <br />
                    <h5 className="mt-4">Code</h5>

                    <br />
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>


                </div>
            </div>
        </div >
    );
};


export default ModalUI;