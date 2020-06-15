import styled from "styled-components";

export const Title=styled.p`
width:95%;
text-align:center;
font-size:30px;
font-wight:light;
margin-bottom: 0;
`;

export const Container=styled.div`
width:80%;
margin:0px auto;
padding:10px 0;
display:flex; 
justify-content:space-around;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    width:95%;
  }
`;

export const Button=styled.button`
display:block;
margin:20px auto;
padding 10px 20px;
font-weight:bold;
border:1.5px solid black;
border-radius:5px;
cursor:pointer;
&:active{
background-color:black;
color:white;
}
`;
