import React from 'react';
import './accordion.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Accordion, Section } from 'buikit/lib/Accordion';


const AccordionUI = props => {
    const codeString = `
    import React from 'react';
    import { Accordion, Section } from 'buikit/lib/Accordion';
    
    
    const AccordionUI = props => {
        return (
                    <div className="container">
                        <h1>Accordion</h1>
    
                        <Accordion>
                            <Section title="First" id="first">
                                First Contents Here
                            </Section>
                            <Section title="Second" id="second">
                                Second Contents Here
                            </Section>
                            <Section title="Third" id="third">
                                Third Contents Here
                            </Section>
                        </Accordion>
                    </div>
        );
    };
    
    
    export default AccordionUI;`;
    return (
        <div >
            <div className="overview-body">
                <div className="container">
                    <h1>Accordion</h1>
                    <p className="my-4">

                    </p>

                    <h5>Sample</h5>
                    <Accordion>
                        <Section title="First" id="first">
                            First Contents Here
                        </Section>
                        <Section title="Second" id="second">
                            Second Contents Here
                        </Section>
                        <Section title="Third" id="third">
                            Third Contents Here
                        </Section>
                    </Accordion>
                    <br/>
                    <h5>Code</h5>

                    <br/>
                    <SyntaxHighlighter language="javascript" style={docco}>
                        {codeString}
                    </SyntaxHighlighter>

                   
                </div>
            </div>
        </div >
    );
};


export default AccordionUI;