import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => (
    <div className="ui large menu">
        <Link to="/" className="item header blue">
            <i className="home large blue icon"/>
            HOME
        </Link>

        <div className="right menu">
            <Link to="/" className="center middle item header blue">
                <i className="podcast large blue icon"/>
                ALL STREAMS
            </Link>
            <GoogleAuth/>
        </div>
    </div>
)

export default Header