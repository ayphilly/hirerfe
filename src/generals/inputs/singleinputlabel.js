import "./singleinputlabel.scss"


const Singleinputlabel = (props) => {

    return (
        <div className="form-input">
            <label> {props.label} </label>
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder} disabled={props.disabled} style={{width: props.width +'px'}}></input>
        </div>
    )
}
export default Singleinputlabel;