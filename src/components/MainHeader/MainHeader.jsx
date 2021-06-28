
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import {MainHeaderStyle} from "./MainHeaderStyle";


const MainHeader = (props) => {
    return (
        <MainHeaderStyle>
            <Logo/>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} favorites={props.favorites} />
        </MainHeaderStyle>
    )
}

export default MainHeader;