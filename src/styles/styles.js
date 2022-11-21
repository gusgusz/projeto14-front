import styled from "styled-components";
import {Purple} from "../colors/Colors.js";
import { Link } from "react-router-dom";
   
const Container = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: ${Purple};
align-items: center;

h1{
    color: white;
}

`;

const Input = styled.input`
height: 58px;
width: 326px;
border-radius: 5px;
margin-bottom: 20px;
font-family: Raleway;
font-size: 20px;
font-weight: 400;
line-height: 23px;
color: black;

`;

const Button = styled.button`
height: 46px;
width: 326px;
border-radius: 5px;
background-color: #A328D6;
color: #FFFFFF;
border: #A328D6;
cursor: pointer;

`;

const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 88%;
`
;

const StyledLink = styled(Link)`
text-decoration: none;
color: #FFFFFF;
margin-top: 18px;
`;

const Top = styled.div`
display: flex;
justify-content: space-between;
width: 88%;
align-items: center;
margin-top: 14px;

div{
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    color: #ffffff;

}
ion-icon{
    height: 30px;
    width: 30px;
   color: #ffffff;

}
`;

const Content = styled.div`
width: 85%;
height: 60%;
background-color: #FFFFFF;
margin-top: 20px;
overflow-y: scroll;

.warn{
    font-family: Raleway;
    align-self: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    color: grey;
    margin: 30%;
}

div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;

    .date{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: #C6C6C6;
    }

    .description{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        color: black;
    }
    .value{
        font-family: Raleway;
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        background-color: ${props => props.color};
       
    }
}
`;

const Buttons = styled.div`
display: flex;
width: 85%;
margin-top: 30px;
justify-content: center;



.in{
  
    background-color: #A328D6;
    color: white;
    height: 114px;
    margin-right: 10px;
    width: 114px;
}

.out{
  
    background-color: #A328D6;
    color: white;
    height: 114px;
    width: 114px;
    margin-left: 10px;

    
    
}
`;

const Value = styled.div`
    font-family: Raleway;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: ${props => props.color};
   
`
export {Container, Input, Button, Form, StyledLink, Top, Content, Buttons, Value};