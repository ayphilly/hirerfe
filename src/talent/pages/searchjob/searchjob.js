import "./searchjob.scss";

import Singleinput from "../../../generals/inputs/singleinput";
import { Dropdown, Option } from "../../../generals/inputs/dropdown/dropdown";
import MapContainer from "../../../generals/map/googlemap";
import { Creatjobalert } from "../../components/jobalert/createjobalert";
import Singlejob from "../../components/singlejob/singlejob";
import { Jobfilter } from "../../components/jobfilter/jobfilter";
import { jobSearch } from "../../constants";
import { useState, useEffect } from "react";
import { accordionFunc } from "../../../helper";

export const Searchjob = (props) => {
  const [status, setStatus] = useState(null);
  const [userloc, setLoc] = useState({});
  const [addr, setAddr] = useState();

  var openAction = () => {
    var mor = document.querySelectorAll(".vertical-icon");
    for (var i = 0; i < mor.length; i++) {
      mor[i].addEventListener("click", function () {
        if (this.nextSibling.style.display) {
          this.nextSibling.style.display = "none";
        } else {
          this.nextSibling.className += " moreactive";
          this.style.color = "black";
        }
      });
    }
  };

  var jobs = jobSearch.map((job) => {
    return (
      <Singlejob
        key={job.icao}
        title={job.title}
        company={job.company}
        days={job.days}
        location={job.location}
        type={job.type}
        click={openAction}
      ></Singlejob>
    );
  });

  function success(pos) {
    var crd = pos.coords;
    setLoc({ lat: crd.latitude, lon: crd.longitude });
    if (userloc.lat === crd.latitude && userloc.lon === crd.longitude) {
      navigator.geolocation.clearWatch(userloc);
    }
  }

  function error(err) {
    console.warn("ERROR(" + err.code + "): " + err.message);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLoc({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          // setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  var getLocc = async () => {
    let response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userloc.lat},${userloc.lon}&key=AIzaSyCUKKnD6wpJJHyENK1BkYSqQgM2u9i-XOM`
    );
    await response.json();
    // setAddr(commits.results[0].address_components[3].long_name)
    setAddr("my current location");
    // console.log(commits.results[0].address_components[3].long_name);
  };

  // Unused var
  console.log([getLocc, status, success, error, options]);

  useEffect(() => {
    accordionFunc();
    getLocation();
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setAddr("my current location");
    }, 5000);

    return () => clearTimeout(timer);
  }, [userloc]);

  // useEffect(()=> {
  //     if (navigator.geolocation) {
  //         navigator.permissions
  //           .query({ name: "geolocation" })
  //           .then(function (result) {
  //             if (result.state === "granted") {
  //             //   console.log(result.state)
  //               //If granted then you can directly call your function here
  //               navigator.geolocation.watchPosition(success, error, options);
  //             } else if (result.state === "prompt") {
  //               navigator.geolocation.getCurrentPosition(success, error, options);
  //             } else if (result.state === "denied") {
  //               alert("Geo Location disabled, go to your settings to enable.")
  //             }
  //             result.onchange = function () {
  //               console.log(result.state);
  //             };
  //           });
  //       } else {
  //         alert("Sorry Not available!");
  //       }

  // })

  return (
    <div className="searchjob-container">
      <div className="searchjo-inner-col">
        <div className="searchjob-left">
          <div className="searchjob-left-top">
            <form className="searchjob-form">
              <div className="search-input">
                <Singleinput
                  type="text"
                  placeholder="Job title, keywords, or company"
                  label="What ?"
                  subtext="Job title, keywords, or company"
                  name="title"
                  width={340}
                ></Singleinput>
                <Singleinput
                  type="text"
                  placeholder={addr}
                  label="Where ?"
                  subtext="city or postcode"
                  name="location"
                  width={340}
                  value={addr}
                ></Singleinput>

                <button type="submit" className="search-submit">
                  {" "}
                  Search{" "}
                </button>
              </div>

              <div className="form-dropdown">
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

          <hr />

          <div className="searchjob-left-bottom">
            <div className="left">
              <div className="left-inner">
                <Creatjobalert></Creatjobalert>

                <div className="left-filter">
                  <div className="single-filter">
                    <button className="accordion">Employment Type</button>
                    <ul className="panel">
                      <li>
                        {" "}
                        <Jobfilter label="Remote" result={5}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter label="Contract" result={0}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter
                          label="Full time"
                          result={3}
                        ></Jobfilter>{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="single-filter">
                    <button className="accordion">Locations</button>
                    <ul className="panel">
                      <li>
                        {" "}
                        <Jobfilter label="Lagos" result={1}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter label="Abuja" result={0}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter label="Ibadan" result={4}></Jobfilter>{" "}
                      </li>
                    </ul>
                  </div>

                  <div className="single-filter">
                    <button className="accordion">Salary Range</button>
                    <ul className="panel">
                      <li>
                        {" "}
                        <Jobfilter label="$5-$10" result={2}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter label="$50-$100" result={3}></Jobfilter>{" "}
                      </li>
                      <li>
                        {" "}
                        <Jobfilter label=">$1000" result={0}></Jobfilter>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right-inner">{jobs}</div>
            </div>
          </div>
        </div>

        <div className="searchjob-right">
          <div className="searchjob-right-inner">
            <MapContainer loc={userloc}></MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
