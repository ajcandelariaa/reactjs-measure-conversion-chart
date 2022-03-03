import styled from "styled-components";

export const Inputs = styled.div`
    display: grid; 
    grid-template-columns: 1fr 3fr 1fr;
    gap: 3px;

    input{
        border: 1px solid #488FB1;
        color: #488FB1;
        outline: none;
        text-align: center;
        padding: 10px 0px;
        font-size: 1.5rem;
    }

    select{
        border: 1px solid #488FB1;
        color: #488FB1;
        outline: none;
        padding: 10px 0px;
        font-size: 1rem;
    }
`;
