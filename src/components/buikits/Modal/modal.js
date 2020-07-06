import React, { useCallback } from 'react';
import './modal.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ModalDefault from 'buikit/lib/ModalDefault';
import useAppContext from '@baaz/adapter/context/app'


const ModalUI = props => {

    // const [, { toggleDrawer }] = useAppContext();

    const clickHandler = useCallback(() => {
        // toggleDrawer('modal');
    }, [])

    const codeString = `
    import React from 'react';
    
    
    
    
    
    export default AccordionUI;`;
    return (
        <div >
            <div className="overview-body">
                <div className="container">
                    <h1>Modal</h1>
                    <p className="my-4">

                    </p>

                    <h5>Sample</h5>
                    <button type="button" className="btn btn-success" onClick={clickHandler}>Click Here</button>
                    <br />
                    <h5>Code</h5>

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