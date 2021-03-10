import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
    iconName: 'sun'},
    winter: {
        text: "Burr, Its cold",
        iconName: 'snowflake'}
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter':'summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];  //text,iconName
    console.log(props.time);
    return (
        <div><h4 className={`rightAlign`}>Current Time is: {props.time}</h4>
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`} />
            </div>
        </div>
    );
}
export default SeasonDisplay;