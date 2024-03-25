

export default function NumberCell({handleNumberClick, value}) {
    return (
        <div onClick={() => {handleNumberClick(value)}} className="num-cell op">
            <p>{value}</p>
        </div>
    );
}