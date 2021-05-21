import "./singleinput.scss"


const Singleinput = (props) => {

    return (
        <div className="single-form-input">
            <label className="sing-form-label"> {props.label} </label>
            <p>{ props.subtext  && props.subtext}</p>
            <input type={props.type}  name={props.name}  placeholder={props.placeholder} style={{width: props.width +'px'}}></input>
        </div>
    )
}
export default Singleinput;