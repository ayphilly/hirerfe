import "./singleworks.scss";

const Singleworks = (props) => {

    return (
        <div className="singlework-container">
            
            <div className="singlework-inner">
                <img src={props.img} alt={props.img}></img>
                <div className="singlework-content">
                    <p>{props.title}</p>
                    <p>{props.subtitle}</p>
                </div>
                
            </div>

        </div>
    )


}

export default Singleworks;