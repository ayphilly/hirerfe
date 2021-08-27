import "./pagination.scss"
import { links } from "../../constants"
export const Pagination =() => {
    var pags = links.links.map ((link, index)=> {
        return (
            <SinglePagination
                index={index}
                link={link}
            />
        )
    })
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
    return (
        <div className={`single-pagination-container ${props.link.active ? 'active' : ''}`}>
            <p className={`single-text ${props.link.active ? 'active' : ''}`}>{props.link.label}</p>
        </div>
    )
}