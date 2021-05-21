import "./tryhirer.scss"

const Tryhirer = (props) => {

    return (
        <div className="tryhirer-container">
            <div className="tryhirer-innner-col">
                <p> {props.title} </p>
                <p> {props.subtitle} </p>
                <a className="tryhirer-inner-btn" href="#">Create A Profile </a>
            </div>

        </div>
    )
}

export default Tryhirer;