import React from 'react';
import styles from './InformationPage.module.scss'
import Navigation from "../Layouts/Navigation/Navigation";
import NowInformation from "./NowInformation/NowInformation";

const InformationPage = () => {
    return (
        <Navigation>
            <NowInformation/>
        </Navigation>
    );
};

export default InformationPage;
