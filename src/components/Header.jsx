import React, { useState } from "react";
import moment from "moment";

function Header() {
  let [ampm, setAmPm] = useState("am");
  let [hourdata, sethour] = useState(0);
  let [minutesdata, setminutes] = useState(0);
  let [secondsdata, setseconds] = useState(0);

  let updatedTime = () => {
    let timeDate = moment().format();
    let timeSplit = timeDate.split("T")[1].split("+")[0];
    let hour = timeSplit.split(":")[0];
    let minutes = timeSplit.split(":")[1];
    let seconds = timeSplit.split(":")[2];
   
    setminutes(minutes);
    setseconds(seconds);

    if (hour > 12) {
      hour = hour - 12;
      setAmPm("pm");
      sethour(hour);
    }
  };

  setInterval(updatedTime, 1000);

 console.log(hourdata,minutesdata,secondsdata)
 
  return (
    <div className="ui fixed menu navbar">
      <div className="header">
        <h2>Amazon</h2>
      </div>
      <div className="date">
        {hourdata} : {minutesdata} : {secondsdata} {ampm}
      </div>
    </div>
  );
}

export default Header;
