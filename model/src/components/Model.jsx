import React, { useState, useCallback } from 'react'
import "../styles/Model.css"

const Model = () => {

    const [model, setModel] = useState(false);

    const handleOpen = useCallback(() => {
        return setModel(true);
    }, [])

    return (

        <div className="container">
            {model === false
                ?
                <div className="base-container">
                    <h1>Click here to view the model</h1>
                    <button className="btn btn-open" onClick={handleOpen}>Open Model</button>
                </div>
                :
                <div className="model-container">
                    <div className="model-header">
                        <button className="btn-x" onClick={() => setModel(false)}>X</button>
                        <h3>
                            Are you sure You want to Continue?
                        </h3>
                    </div>
                    <div className="model-body">
                        <p>This is a model that contains information about nothing. So don't waste your time in reading this just click the buttons and enjoy. One more thing Continue button doesn't work.<strong> XD</strong></p>
                    </div>
                    <div className="model-footer">
                        <button className="btn btn-cancel" onClick={() => setModel(false)}>Cancel</button>
                        <button className="btn btn-open">Continue</button>
                    </div>
                </div>
            }


        </div >
    )
}

export default Model;