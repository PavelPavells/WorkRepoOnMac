import styled, {createGlobalStyle} from "style-components";
export const GlobalStyle = createGlobalStyle `
    body {
        font-family: Arial, Helvetica, sans-serif;
    }
`;
export const Center = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(white,#9FF6FF,#56B6C4);
    & > weather {
        display: flex;
        flex-direction: column;
        text-align: center;
        animation: fadein 2s;
    }
    @keyframes fadein {
        from {opacity: 0}
        to {opacity: 1}
    }
    img {
        height: 30vh;
    }
`;
export const Paragraph = styled.p `
    font-family: Arial, Helvetica, sans-serif;
    font-size: 5vmin;
`;
export const Form = styled.form `
    background-color: white;
    border-radius: 5px;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Input = styled.input `
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 2px solid black;
`;