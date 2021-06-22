import "./archived.scss";
import { useState } from "react";
import archivedimage from "../../talentassets/Archived.svg";
import { Emptystate } from "../emptystate/emptystate";

export const Archived = () => {
  const [archivedjobs, setArchivedjobs] = useState([]);
  console.log(setArchivedjobs);
  if (archivedjobs.length < 1) {
    return (
      <Emptystate
        image={archivedimage}
        title="No archived jobs yet"
        subtitle=" Jobs you choose to save during a  job search will be shown here."
      ></Emptystate>
    );
  }
};

/*<div className="savedjobs-empty-container">
<div className="savedjobs-empty-inner">
    <img src= {savedjobimage} alt="saved-job-img" />
    <p className="empty-headline"> No saved jobs yet</p>
    <p className="empty-subtitle">
        Jobs you choose to save 
        during a  job search will be 
        shown here.
    </p>
</div>
</div>*/
