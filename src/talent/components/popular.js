import "./popular.scss";
import SingleSearch from "./singleSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Popular() {
  var searchList = [
    "Supermarket",
    "Healthcare",
    "Call Centre",
    "Dispatch Rider",
    "Customer Service",
    "Work From Home",
    "Temporary",
    "Full Time",
    "Warehouse",
    "Care Assisstant",
  ];

  var searches = searchList.map((search) => {
    return <SingleSearch key={search} search={search}></SingleSearch>;
  });
  return (
    <div className="popular-container">
      <div className="inner">
        <div className="popular-headline">
          <p>Popular Searches</p>
          <p>Popular searches nearby</p>
        </div>
        <div className="popular-searches-content">{searches}</div>

        <a className="popular-search-link" href="#dummylink">
          Find Jobs Near You
          <FontAwesomeIcon icon={faArrowRight} className="direction-icon" />
        </a>
      </div>
    </div>
  );
}

export default Popular;
