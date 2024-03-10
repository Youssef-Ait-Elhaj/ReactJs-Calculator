import { useEffect, useState } from "react";
import OutputScreen from "./OutputScreen";
import Operation from "./Operation";
import NumberCell from "./NumberCell";


export default function Calculator() {
    const [calculationResult, setCalculationResult] = useState(0);
    let ops = ['AC', '+/-', '%', '/', 'x', '-', '+', '='];
    let rowOps = [];
    let columnOps = [];
    let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    let numbers = nums.map(num => <NumberCell value={num} />)

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
                    {numbers}
                </div>
                <div className="col-ops">
                    {columnOps}
                </div>
            </div>
        </>
    )
}