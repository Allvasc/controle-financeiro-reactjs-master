import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width:750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        margin-left: 20px;
        accent-color: black;
        margin-top: 0;
        margin-right: 10px;
    }
`;

export const Button = styled.button`
    background-color: teal;
    border-radius: 5px;
    border: none;
    color: #fff;
    height: 40px;
    width: 100px;
    cursor: pointer;
`;


