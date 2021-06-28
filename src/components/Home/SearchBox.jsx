import {Input} from "antd";
import React from "react";
import {SearchWrapperStyle} from "./AllCardsStyle";

const SearchBox = (props) => {
    const { Search } = Input;


    return (
        <SearchWrapperStyle curPosition={props.curPositon}>
            <Search
            placeholder="Enter movie, series, episode name"
            enterButton="Search"
            size="large"
            onChange={e => props.searchHandler(e.target.value)}
            onSearch={value => props.searchHandler(value)}
        />
        </SearchWrapperStyle>
    )
}

export default SearchBox;