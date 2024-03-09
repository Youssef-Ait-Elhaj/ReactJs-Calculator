import { useEffect, useState } from "react";
import OutputScreen from "./OutputScreen";
import Operation from "./Operation";


export default function Calculator() {
    const [calculationResult, setCalculationResult] = useState(0);
    let ops = ['AC', '+/-', '%', '/', 'x', '-', '+', '='];
    let rowOps = [];
    let columnOps = [];

    for (var i = 0; i < ops.length; i++) {
        if (i <= 2) {
            rowOps.push(<Operation key={i} symbol={ops[i]} />)
        } else {
            columnOps.push(<Operation key={i} symbol={ops[i]} />)
        }
    }

    return (
        <>
            <OutputScreen result={calculationResult} />
            <div className="calc">
                <div className="row-ops">
                    {rowOps}
                </div>
                <div className="col-ops">
                    {columnOps}
                </div>
            </div>
        </>
    )
}