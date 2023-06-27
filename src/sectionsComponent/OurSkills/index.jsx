import {useState, useEffect} from "react";
import "./style.scss";
import { AppTitle } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const OurSkills = () => {

    return (
        <div id="ourSkills">
            <div className="container">
                <AppTitle
                    title="our skills"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut"
                    containerStyle={{marginBottom: 50}}
                />
                <div className="statistics">
                    <CircularProgressbar counterClockwise value={0.70} maxValue={1} text={`7`} />
                    <CircularProgressbar counterClockwise value={0.50} maxValue={1} text={`10`} />
                    <CircularProgressbar counterClockwise value={0.50} maxValue={1} text={`250`} />
                    <CircularProgressbar counterClockwise value={0.50} maxValue={1} text={`${0.98 * 100}%`} />
                </div>
            </div>
        </div>
    )

}

export default OurSkills;