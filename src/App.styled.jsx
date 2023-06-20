import styled from "@emotion/styled";

export const AppContainer = styled.div`
    height: 100vh;
`

export const Section = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: lightsalmon;
    position: relative;
    top: 70px;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }

    > *{
        width: 100%;
        height: calc(100vh - 70px);
        scroll-snap-align: center;
    }
`