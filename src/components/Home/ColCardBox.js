import React from "react";
import {AddFavoriteButtonSyle, BadgeStyle, CalCardBoxStyle, CoverImage, TitleStyle, YearStyle} from "./AllCardsStyle";
import {HeartOutlined} from '@ant-design/icons'
import noImg from '../images/no-image.png';

const API_KEY = 'ce762116';

const ColCardBox = ({Title, imdbID, Poster, Type, ShowDetail, DetailRequest, ActivateModal, Year, favorite, onFavoriteClick}) => {
    const clickHandler = () => {

        // Display Modal and Loading Icon
        ActivateModal(true);
        DetailRequest(true);

        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
            .then(resp => resp)
            .then(resp => resp.json())
            .then(response => {
                DetailRequest(false);
                ShowDetail(response);
            })
            .catch(({message}) => {
                DetailRequest(false);
            })
    }

    return (

        <CalCardBoxStyle>
            <div onClick={() => clickHandler()}>
                <CoverImage src={Poster === 'N/A' ? noImg : Poster}/>
                <TitleStyle>{Title}</TitleStyle>
                <YearStyle>({Year})</YearStyle>
                <BadgeStyle>{Type}</BadgeStyle>
                <div>{favorite.toString()}</div>
            </div>

            <AddFavoriteButtonSyle onClick={() => onFavoriteClick(imdbID)}>
                <span>Add to Favorite </span>
                <HeartOutlined/>
            </AddFavoriteButtonSyle>

        </CalCardBoxStyle>

    )
}

export default ColCardBox;
