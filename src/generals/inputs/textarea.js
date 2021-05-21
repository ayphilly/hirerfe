import "./textarea.scss"


const Textarea = (props) => {

    return (
        <div className="textarea-input">
            <label> {props.label} </label>
            <textarea type={props.type} id={props.name} name={props.name}  placeholder={props.placeholder} style={{width: props.width +'px'}}></textarea>
        </div>
    )
}
export default Textarea;