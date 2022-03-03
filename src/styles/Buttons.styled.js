import styled from "styled-components";

export const Buttons = styled.div`
    display: grid; 
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;

    button{
        width: 100%;
        cursor: pointer;
        background-color: #9AD0EC;
        outline: none;
        border: 0;
        font-size: 15px;
        color: white;
        padding: 10px 0px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .btn-active{
        color: #488FB1;
        font-weight: 900;
        background-color: #E5F5FE;
    }
`;
