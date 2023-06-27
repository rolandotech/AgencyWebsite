import {useState, useEffect} from "react";
import "./style.scss";

const AppTitle = ({
    title,
    description,
    containerStyle,
    style
}) => {

    return (
        <div className="AppTitle" style={containerStyle}>
            <div className="content" style={style}>
                <h2>{title}</h2>
                {
                    description ? <p>{description}</p> : null
                }
            </div>
        </div>
    )

}

export default AppTitle;