import { useEffect } from "react";


export default function Operation(props) {
    let identifier = '';

    useEffect(() => {
        switch (props.symbol) {
            case 'AC':
                identifier = 'AC';break;
            case '+/-':
                identifier = 'invert';break;
            case '%':
                identifier = 'modulus';break;
            case '/':
                identifier = 'divide';break;
            case 'x':
                identifier = 'multiply';break;
            case '-':
                identifier = 'substract';break;
            case '+':
                identifier = 'add';break;
            case '=':
                identifier = 'result';break;
        }
    }, [])

    return (
        <div className="op">
            <p className="op-symbol">{props.symbol}</p>
        </div>
    )
}