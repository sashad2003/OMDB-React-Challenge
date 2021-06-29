import React from "react";
import Button from "../../UI/Button/Button";
import NavigationStyled from "./NavigationStyle";
import {HeartOutlined} from '@ant-design/icons'

const Navigation = (props) => {
    return (
        <>
            {props.isLoggedIn &&
            <NavigationStyled>
                <Button onClick={props.showFavoritesClicked}> <HeartOutlined/> {props.favorites.length} </Button>
                <Button onClick={props.onLogout}>Logout</Button>
            </NavigationStyled>
            }
        </>
    )
}
export default Navigation;