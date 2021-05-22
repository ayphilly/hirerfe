import "./resetcontainer.scss"
export const Resetcontainer = (props)=> {

    return (
        <div className="passwordreset-container" style={{height: props.height +'px'}}>
            <div className="progress"></div>
            <div className="passwordreset-inner-col">
                <div className="passwordreset-inner-top">
                    <p>Reset Your Password </p>
                    <p>
                        {
                            props.subtitle
                        }
                    </p>
                </div>

                {
                    props.children
                }

            </div>

        </div>
    )

}