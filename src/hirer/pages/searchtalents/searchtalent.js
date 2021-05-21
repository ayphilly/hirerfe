import "./searchtalent.scss"

import Singleinput from "../../../generals/inputs/singleinput"
import  { Dropdown, Option }  from "../../../generals/inputs/dropdown/dropdown"
import  MapContainer  from "../../../generals/map/googlemap"
import {Singletalent} from "../../components/singletalent/singletalent"
import {Creatjobalert} from "../../../talent/components/jobalert/createjobalert"
export const Searchtalent = () => {

    return (
        <div className="searchtalent-container">
            <div className="searchtalent-inner-col">
                <div className="searchtalent-left">
                    <div className="searchtalent-left-top">
                        
                        <form>
                            <div className="search-input">
                                <Singleinput
                                    type="text"
                                    placeholder ="Job title, keywords, or company"
                                    label ="What ?"
                                    subtext="Job title, keywords, or company"
                                    name="title"
                                    width={350}
                                >

                                </Singleinput>
                                <Singleinput
                                    type="text"
                                    placeholder ="{addr}"
                                    label ="Where ?"
                                    subtext="city or postcode"
                                    name="location"
                                    width={350}
                                    // value={addr}
                                >

                                </Singleinput>

                                <button type="submit" className="search-submit"> Search </button>

                            </div>
                            
                            <div className = "form-dropdown">
                                <Dropdown
                                    // formLabel="Number of hirers"
                                    buttonText="Send form"
                                    // onChange={handleSelect}
                                    width={200}
                                >
                                    <Option selected value="Job Type" />
                                    <Option value="1-5" />
                                    <Option value="6-10" />
                                    <Option value="10-20" />
                                </Dropdown>
                                <Dropdown
                                    // formLabel="Number of hirers"
                                    buttonText="Send form"
                                    // onChange={handleSelect}
                                    width={200}
                                >
                                    <Option selected value="Location" />
                                    <Option value="1-5" />
                                    <Option value="6-10" />
                                    <Option value="10-20" />
                                </Dropdown>
                                <Dropdown
                                    // formLabel="Number of hirers"
                                    buttonText="Send form"
                                    // onChange={handleSelect}
                                    width={200}
                                >
                                    <Option selected value="Salary" />
                                    <Option value="1-5" />
                                    <Option value="6-10" />
                                    <Option value="10-20" />
                                </Dropdown>
                                <Dropdown
                                    // formLabel="Number of hirers"
                                    buttonText="Send form"
                                    // onChange={handleSelect}
                                    width={200}
                                >
                                    <Option selected value="Date Posted" />
                                    <Option value="1-5" />
                                    <Option value="6-10" />
                                    <Option value="10-20" />
                                </Dropdown>

                            </div>
                        </form>
                    </div>

                    <hr/>

                    <div className="searchtalent-left-bottom">
                        <div className="left">
                            <div className="left-inner">
                                <Creatjobalert></Creatjobalert>
                            </div>

                        </div>
                        <div className="right">
                            <div className="right-details">
                                <p>Workers in Lagos</p>
                                <p>Page 1 of 200 workers</p>
                            </div>
                            <div className="right-container">
                                <div className="right-inner">
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    <hr/>
                                    <Singletalent></Singletalent>
                                    
                                
                                </div>
                                
                               
                            </div>

                        </div>

                    </div>

                </div>


                <div className="searchtalent-right">
                    <div className="searchtalent-right-inner">
                        <MapContainer
                            // loc ={userloc}
                        ></MapContainer>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}