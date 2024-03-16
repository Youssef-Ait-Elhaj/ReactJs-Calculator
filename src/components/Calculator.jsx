import { useEffect, useState } from "react";
import OutputScreen from "./OutputScreen";
import Operation from "./Operation";
import NumberCell from "./NumberCell";


export default function Calculator() {
    const [answer, setAnswer] = useState(0);
    const [instruction, setInstruction] = useState('');
    const [operationHistory, setOperationHistory] = useState([]);
    const [currentOp, setCurrentOp] = useState([]);
    const [isNextNum, setIsNextNum] = useState(false);
    const [isNextOp, setIsNextOp] = useState(false);

    
    let ops = ['AC', '+/-', '%', '÷', '×', '-', '+', '='];
    let rowOps = [];
    let columnOps = [];
    let nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];
    let numbers = nums.map((num, i) => <NumberCell handleNumberClick={handleNumberClick} key={i} value={num} />)

    useEffect(() => {
        let instruction = '';
        if (operationHistory.length >= 2) {

            if (operationHistory[operationHistory.length -1] === '=' && currentOp != []) {
                setCurrentOp([...operationHistory]);
                currentOp.forEach(entry  => {
                    instruction += (' ' + entry);
                });
                setInstruction(instruction);
                if (operationHistory.length === 2) {
                    operationHistory.pop();
                    setIsNextOp(true);
                    console.log(operationHistory);
                }
            } else {
                operationHistory.forEach(entry  => {
                    instruction += (' ' + entry);
                });
                setInstruction(instruction);
                setCurrentOp([]);
                console.log(operationHistory);
            }

            if (operationHistory.length === 2 && operationHistory[operationHistory.length -1] === '=') {
                operationHistory.pop();
                // setOperationHistory([...operationHistory]);
            }

            if (operationHistory.length >= 3) {
                const num1 = typeof operationHistory[0] === "number" ? operationHistory[0] : Number(operationHistory[0]);
                const num2 = typeof operationHistory[2] === "number" ? operationHistory[2] : Number(operationHistory[2]);
                const op = operationHistory[1];
                const nextOp = operationHistory[operationHistory.length -1];
                console.log(operationHistory);
                console.log('current op: ' +op);
                console.log('next op: ' +nextOp);
                switch (op) {
                    case '%':
                        let modRes = num1 % num2;
                        setAnswer(modRes);
                        setOperationHistory([modRes, nextOp]);
                        break;
                    case '÷':
                        let divRes = num1 / num2;
                        setAnswer(divRes);
                        setOperationHistory([divRes, nextOp]);
                        break;
                    case '×':
                        let multiRes = num1 * num2;
                        setAnswer(multiRes);
                        setOperationHistory([multiRes, nextOp]);
                        break;
                    case '-':
                        let subRes = num1 - num2;
                        setAnswer(subRes);
                        setOperationHistory([subRes, nextOp]);
                        break;
                    case '+':
                        let sum = num1 + num2;
                        setAnswer(sum);
                        setOperationHistory([sum, nextOp]);
                        break;
                    case '=':
                }
            }
        } else if (operationHistory.length === 1) {
            setOperationHistory([...operationHistory, operationHistory[operationHistory.length-1]])
        }
    }, [operationHistory])

    function handleOperationClick(op) {
        switch (op) {
            case 'AC':
                reset();
                break;
            case '+/-':
                revertNum();
                break;
            default:
                handleOperation(op);
                break;
        }
    }

    function handleNumberClick(value) {
        console.log(isNextNum);
        if (isNextNum) {
            setIsNextOp(false);
            setAnswer(value);
            setIsNextNum(false);
        } else {
            console.log(answer);
            setAnswer(answer !== 0 ? answer + '' + value : value === '.' ? answer + value.toString() : value.toString());
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
        let last = operationHistory[operationHistory.length -1];
        if (last !== '=') {
            setOperationHistory([...operationHistory, answer]);
        }
    }


    function handleOperation(op) {
        if (!isNextOp) {
            setIsNextNum(true);
            if (!isNextNum) {
                setOperationHistory([...operationHistory, answer, op]);
            }
        } else if (op !== '=') {
            setOperationHistory([...operationHistory, op]);
        }
        
        setIsNextOp(false);
    }

    function calculateModulo(n1, n2) {
        // setAnswer(n1 % n2);
    }

    function calculateDivision(n1, n2) {
        // setAnswer(n1 / n2);
    }

    function calculateMultiplication(n1, n2) {
        // setAnswer(n1 * n2);
    }

    function calculateSubstraction(n1, n2) {
        // setAnswer(n1 - n2);
    }

    function calculateAddition(n1, n2) {
        // setAnswer(n1 + n2);
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