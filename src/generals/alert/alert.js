import "./alert.scss"

export const Alert = (props) => {

    return  (
        <div className="alert-box"> 
            { props.response.message && <div className= {`alert-box-message ${props.response.status ? 'success' : 'error'}`}>
                        <p>{props.response.message}</p>
                </div>}
        </div>
    )
}