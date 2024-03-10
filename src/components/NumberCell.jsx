

export default function NumberCell(props) {
    return (
        <div onClick={() => {props.handleNumberClick(props.value)}} className="num-cell op">
            <p>{props.value}</p>
        </div>
    );
}