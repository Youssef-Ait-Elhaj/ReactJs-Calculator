import { useEffect } from "react";


export default function Operation(props) {
    return (
        <div onClick={() => {props.handleOperationClick(props.symbol)}} className="op">
            <p className="op-symbol">{props.symbol}</p>
        </div>
    )
}