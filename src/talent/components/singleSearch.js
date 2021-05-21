
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import "./singlesearch.scss";

const SingleSearch = (props) => {

    return (
        <div className="single-search-container">
            <div className="single-search-inner">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <p>{props.search}</p>
            </div>
            
        </div>
    )

}

export default SingleSearch;