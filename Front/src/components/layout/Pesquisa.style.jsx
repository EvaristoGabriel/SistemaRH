import { styled } from "@mui/material";


export const Input = styled('input')`
    height: 25px;
    width: 520px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 28px;
    padding: 20px 5px 5px;
    margin-bottom: 10px;
    color: ${props => props.theme.palette.primary.main}
`;
export const Label = styled('label')`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    margin-bottom: 10px;
`;
export const Span = styled('Span')`
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-size: 28px;
    transition: all 0.3s ease;
`;
export const Form = styled('input')`
    overflow: hidden;
    position: relative;
    width: 80%;
`;
