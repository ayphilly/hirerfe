import "./step.scss"

const Step = (props) => {

    return (
        <div className="step-container">
            <div className="step-inner-col">
                <h1 className="numbers"> {props.number} </h1>
                <div className="step-right">
                    <p>{props.title}</p>
                    <p> {props.subtitle} </p>
                </div>
            </div>

        </div>
    )

}

export default Step;