import styled from 'styled-components';

const NavigationStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    Button{
      margin-left: 1rem;
    }
    @media (max-width: 767px){
        Button{
          padding: 2px 1rem;
          margin-left: 0.5rem;
        }
    }
`
export default NavigationStyled;