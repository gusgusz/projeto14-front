import styled from "styled-components";
import {Purple, White} from "../../colors/Colors.js";

export default function Logo() {
    return (
        <MyWallet>
           MyWallet
        </MyWallet>
    )};

const MyWallet = styled.div`
    width: 180px;
    height: 39px;
    margin-top: 6%;
    margin-bottom: 20px;
    color: white;
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    background-color: ${Purple};

    `;