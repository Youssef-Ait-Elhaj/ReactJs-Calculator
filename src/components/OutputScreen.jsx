
export default function OutputScreen({result, instruction}) {

    return (
        <div className="output-scr">
            <p className="calculation">{instruction}</p>
            <p className="output">{isNaN(result) ? '' : result}</p>
        </div>
    );
}