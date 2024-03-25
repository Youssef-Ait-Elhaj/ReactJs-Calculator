

export default function Operation({handleOperationClick, symbol}) {
    return (
        <div onClick={() => {handleOperationClick(symbol)}} className="op">
            <p className="op-symbol">{symbol}</p>
        </div>
    )
}