import "./loading.scss"
import load from "../../hirer/hirerassets/loading.svg"
export const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading-inner">
                <img src={load} alt="load-icon"/>
                <p>Loading, please wait</p>
            </div>

        </div>
    )
}