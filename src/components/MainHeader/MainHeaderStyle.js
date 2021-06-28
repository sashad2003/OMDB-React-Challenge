import styled from 'styled-components';

export const MainHeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    align-items: center;
    background: black;
    padding: 0 2rem;
    margin-bottom: 5rem;
    position: sticky;
    top: 0;
    z-index: 999;
    @media(max-width: 767px){
    padding: 0 1.5rem;
    }
`
