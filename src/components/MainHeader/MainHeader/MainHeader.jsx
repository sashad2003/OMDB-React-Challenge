import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import {MainHeaderStyle} from "./MainHeaderStyle";


const MainHeader = (props) => {
    return (
        <MainHeaderStyle>
            <Logo/>
            <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} favorites={props.favorites}
                        showFavoritesClicked={props.showFavoritesClicked}/>
        </MainHeaderStyle>
    )
}

export default MainHeader;