import React from 'react';
import Button from "../UI/Button/Button";
import {
    AllCards,
    BadgeStyle,
    CalCardBoxStyle,
    CoverImage,
    FavoritesTitleStyle,
    TitleStyle,
    YearStyle
} from "../AllCardsStyle";

const FavoritesPage = (props) => {

    const data = props.favoritesLocal;

    return (
        <div>
            <FavoritesTitleStyle>My Favorites</FavoritesTitleStyle>
            <AllCards>
                {data !== null && data.length > 0 && data.map((favoriteLocal, index) =>
                    <CalCardBoxStyle key={index}>
                        <div>
                            <CoverImage
                                src={favoriteLocal.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : favoriteLocal.Poster}
                            />
                            <div>
                                <TitleStyle>{favoriteLocal.Title}</TitleStyle>
                                <YearStyle>{favoriteLocal.Year}</YearStyle>
                                <BadgeStyle>{favoriteLocal.Type}</BadgeStyle>
                            </div>
                        </div>
                        <Button onClick={() => props.onFavoriteClick(favoriteLocal)}> Remove from favorites</Button>
                    </CalCardBoxStyle>)}
            </AllCards>
        </div>
    )
}

export default FavoritesPage;