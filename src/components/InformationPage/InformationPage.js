import React from 'react';
import Navigation from "../Layouts/Navigation/Navigation";
import NowInformation from "./NowInformation/NowInformation";
import WeatherInformation from "./WeatherInformation/WeatherInformation";

const InformationPage = () => {
    return (
        <Navigation>
            {/*<NowInformation/>*/}
            <WeatherInformation/>
        </Navigation>
    );
};

export default InformationPage;
