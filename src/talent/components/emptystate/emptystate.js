import "./emptystate.scss";

export const Emptystate = (props) => {

    return (
        <div className="empty-state-container">

            <div className="empty-state-inner">
                <img src= {props.image} alt="empty-img" />
                <p className="empty-state-headline">{props.title} </p>
                    
                
                <p className="empty-state-subtitle">
                    {props.subtitle}
                    
                </p>
            </div>
        </div>
    )
}