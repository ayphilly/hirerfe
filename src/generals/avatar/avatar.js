import "./avatar.scss"

export const Avatar = (props) => {
    const defaultAvi = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
    return (
        <div className="avatar-container">
            {props.avi ? <img src={props.avi} style={{ width: props.width+'px'}} alt="user avatar"/> :<img src={defaultAvi} style={{ width: props.width+'px'}} alt="user avatar"/>  }
        </div>
    )
}