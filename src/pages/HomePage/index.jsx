import {useState, useEffect} from "react";
import './style.scss';
import {about_img} from '../../assets/img'
import { Button } from "@mui/material";
import { AppTitle } from "../../components";
import { OurSkills } from "../../sectionsComponent";

const HomePage = () => {

    const handleReadMore = () => {

    }

    return (
        <di id="home">
            <div className="banner">
                <div className="container">
                    <div className="banner-title">
                        <p className="p1">WE'RE THEME</p>
                        <p className="p2">CREATIVE & DIGITAL</p>
                        <p className="p3">AGENCY</p>
                    </div>
                    <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                    <Button className="clickMore" variant="contained" onClick={() => handleReadMore()}>READ MORE</Button>
                </div>
            </div>
            <div className="aboutUs">
                <div className="container">
                    <AppTitle title="About Us"/>
                    <div className="holder">
                        <div className="content">
                            <h4>WE ARE CREATIVE AGENCY</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            </p>
                        </div>
                        <div className="image-holder">
                            <div className="img-round">
                                <img src={about_img} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OurSkills />
        </di>
    )

}

export default HomePage;