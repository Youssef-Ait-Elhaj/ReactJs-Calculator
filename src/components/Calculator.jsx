import { useEffect, useState } from "react";
import OutputScreen from "./OutputScreen";
import Operation from "./Operation";
import NumberCell from "./NumberCell";


export default function Calculator() {
    const [answer, setAnswer] = useState(0);
    const [instruction, setInstruction] = useState('');
    const [operationHistory, setOperationHistory] = useState([]);
    const [isNextNum, setIsNextNum] = useState(false);
    
    let ops = ['AC', '+/-', '%', '÷', '×', '-', '+', '='];
    let rowOps = [];
    let columnOps = [];
    let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    let numbers = nums.map((num, i) => <NumberCell handleNumberClick={handleNumberClick} key={i} value={num} />)
    console.log(operationHistory);

    function handleOperationClick(op) {
        switch (op) {
            case 'AC':
                reset();
                break;
            case '+/-':
                revertNum();
                break;
            case '=':
                calculateResult();
                break;
            default:
                handleOperation(op);
                break;
        }
    }

    function handleNumberClick(value) {
        if (isNextNum) {
            setAnswer(value);
            setIsNextNum(false);
        } else {
            setAnswer(answer !== 0 ? answer + '' + value : value.toString());
        }
    }

    for (var i = 0; i < ops.length; i++) {
        if (i <= 2) {
            rowOps.push(<Operation key={i} handleOperationClick={handleOperationClick} symbol={ops[i]} />)
        } else {
            columnOps.push(<Operation key={i} handleOperationClick={handleOperationClick} symbol={ops[i]} />)
        }
    }

    function reset() {
        setAnswer(0);
        setOperationHistory([]);
        setInstruction('');
    }

    function revertNum() {
        setAnswer(-answer);
    }

    function calculateResult() {
        setOperationHistory([...operationHistory, answer, '=']);
        const num1 = Number(operationHistory[0]);
        const num2 = Number(operationHistory[2]);
        const op = operationHistory[1];
        console.log(num1);
        console.log(num2);
        console.log(op)
        switch (op) {

        }
    }

    function handleOperation(op) {
        setIsNextNum(true);
        setOperationHistory([...operationHistory, answer, op]);
    }

    return (
        <>
            <OutputScreen result={answer} instruction={instruction} />
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