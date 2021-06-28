import {Col, Tag} from "antd";
import React from "react";
import {DescriptionStyle, ImdbRatingStyle, MovieDetailStyle, TagsStyle, TextTitleStyle} from "./MovieDetailStyle";

const MovieDetail = ({Title, Poster, imdbRating, Rated, Runtime, Genre, Plot, Year}) => {
    return (
        <MovieDetailStyle>
            <img
                src={Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : Poster}
                alt={Title}
            />
            <DescriptionStyle>
                <TextTitleStyle>{Title} {Year}</TextTitleStyle>
                <TagsStyle>
                    <div>
                        <Tag>{Rated}</Tag>
                        <Tag>{Runtime}</Tag>
                        <Tag>{Genre}</Tag>
                    </div>
                    <ImdbRatingStyle>{imdbRating}</ImdbRatingStyle>
                </TagsStyle>
                <div>
                    <Col>{Plot}</Col>
                </div>
            </DescriptionStyle>
        </MovieDetailStyle>
    )
}

export default MovieDetail;
