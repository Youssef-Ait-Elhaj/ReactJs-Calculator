import { useState } from "react";


export default function OutputScreen(props) {

    return (
        <div className="output-scr">
            <p className="calculation">{props.instruction}</p>
            <p className="output">{isNaN(props.result) ? '' : props.result}</p>
        </div>
    );
}