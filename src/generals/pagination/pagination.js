import "./pagination.scss"
import { links } from "../../constants"
export const Pagination =(props) => {

    
    var pags = props.links ? props.links.map ((link, index)=> {
        return (
            <SinglePagination
                index={index}
                link={link}
                links={props.links}
                paginate = {props.paginate}
            />
        )
    }) : ''
    return (
        <div className="pagination-container">
            <div className="pagination-inner">
                {
                    pags
                }
            </div>

        </div>
    )
}

const SinglePagination = (props) => {
    
    if (props.index === 0) {
        var icon = String.fromCharCode(171) 
        return (
            <div className={`single-pagination-container ${props.link.active ? 'active' : ''}`} onClick={()=> props.link.url ? props.paginate(props.link.url) : ''}>
                <p className={`single-text ${props.link.active ? 'active' : ''}`}> {icon} </p>
            </div>
        )
    } 
    else if (props.index === props.links.length -1) {

        var icon = String.fromCharCode(187) 
        return (
            <div className={`single-pagination-container ${props.link.active ? 'active' : ''}`} onClick={()=> props.link.url ? props.paginate(props.link.url) : ''}>
                <p className={`single-text ${props.link.active ? 'active' : ''}`}>{icon}</p>
            </div>
        )

    } else {

        return (
            <div className={`single-pagination-container ${props.link.active ? 'active' : ''}`} onClick={()=> props.paginate(props.link.url)}>
                <p className={`single-text ${props.link.active ? 'active' : ''}`}> {props.link.label} </p>
            </div>
        )

    }
    // return (
    //     <div className={`single-pagination-container ${props.link.active ? 'active' : ''}`}>
    //         <p className={`single-text ${props.link.active ? 'active' : ''}`}> {label} </p>
    //     </div>
    // )
}