import "./singleinput.scss"


const Singleinput = (props) => {

    return (
        <div className="single-form-input">
            <label className="sing-form-label"> {props.label} </label>
            <p>{ props.subtext  && props.subtext}</p>
            <input type={props.type}  name={props.name}  placeholder={props.placeholder} style={{width: props.width +'px', marginBottom : 10, border: props.error ? "1px solid red": '', backgroundColor: props.error ? "#FFEBEB": ''  }} onChange = {props.onChange}></input>
            <p  style={{color:'red', height:5, width:300}} > {props.error ? props.error : " "}</p>
        </div>
    )
}
export default Singleinput;