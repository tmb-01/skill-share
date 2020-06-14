import React, {Component} from 'react';
import {
    StyledCard,
    StyledCardImg,
    StyledCardContent,
    StyledCardContentHeader,
    StyledCardContentBody,
    StyledCardContentFooter
} from "./styles";

const Card = ({cardImg, numberOfStudents, duration, title, author}) => {
    return (
        <>
            <StyledCard>
                <StyledCardImg src={cardImg}/>
                <StyledCardContent>
                    <StyledCardContentHeader>
                        <p><span>{numberOfStudents}</span>students</p>
                        <p><span className="far fa-clock"></span><span>{duration}</span>duration</p>
                    </StyledCardContentHeader>
                    <StyledCardContentBody>
                        {title}
                    </StyledCardContentBody>
                    <StyledCardContentFooter>
                        <p>{author}</p>
                        <h2>
                            {/*<i className="fas fa-bookmark"></i>*/}
                            <i className="far fa-bookmark"></i>
                        </h2>
                    </StyledCardContentFooter>
                </StyledCardContent>
            </StyledCard>
        </>
    );
}

export default Card;