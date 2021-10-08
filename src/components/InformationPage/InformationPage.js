import React, {useState} from 'react';
import Navigation from "../Layouts/Navigation/Navigation";
import NowInformation from "./NowInformation/NowInformation";
import WeatherInformation from "./WeatherInformation/WeatherInformation";

const InformationPage = () => {
    let [value,setValue]=useState(true)
    let click=()=>{
        setValue(prev=>!prev)
    }
    return (
        <Navigation click={click} value={value}>
            {
                value === true ? <NowInformation/>: <WeatherInformation/>
            }

        </Navigation>
    );
};

export default InformationPage;
