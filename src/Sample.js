import React from 'react';
import './App.css';
function Samples() {
    return (
        <div className="sample-container">
            <div className="sample">
                <p>Declarative</p>
                <p>
                    ObjCUI makes it easy to create interactive UIs. <br />
                        Design simple view components for each data state, ObjCUI will efficiently update and
                        render the right component when your data state changes.<br />
                    <br />
                        Declarative Views make your code more predictable and easier to read or debug.
                    </p>
            </div>
            <div className="sample">
                <p>Component Based</p>
                <p>
                    Each View Component is responsible for manage its own state,
                        then compose them to make complex UIs.<br />
                    <br />
                        Since component logic is absolutely focused on data state, you can easily
                        change component by passing rich data.
                    </p>
            </div>
        </div>
    );
}

export default Samples;