import React from "react";
import styled from "styled-components"

export const StyledCard = styled.div`
width:24%;
height:fit-content;
border-radius 8px;
overflow:hidden;
box-shadow: 0 2px 4px 0 rgba(184,184,184,.5);
margin-bottom:20px;
background-color:white;
cursor:pointer;
`;

export const StyledCardImg = styled.img`
width:100%;
`;

export const StyledCardContent = styled.div`
padding:8px
`;

export const StyledCardContentHeader = styled.div`
display:flex;
// justify-content: space-between;
justify-content: space-between;
p{
margin-top:0;
font-family: sssocial;
font-style: normal;
font-weight: 400;
}
span{
margin-right:5px;
}
`;

export const StyledCardContentBody = styled.p`
font-weight:700;
font-size:100%;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
textalign:left;
margin-top:0;
`;

export const StyledCardContentFooter = styled.div`
display:flex;
justify-content:space-between;
p, h2{
margin:0;
}
p{
font-weight: 400;
padding-top:7px
}


`;