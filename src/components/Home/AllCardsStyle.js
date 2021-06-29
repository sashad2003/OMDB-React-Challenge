import styled, {keyframes} from 'styled-components';
import ButtonStyle from "../UI/Button/ButtonStyle";

const mainColor = '#1890ff';
const mainHoverColor = 'rgba(24,143,253,0.2)';

const animationCards = keyframes`
    0%{
    margin-top: 20rem;
    opacity: 0;
    }
    50%{
      margin-top: 20rem;
      opacity: 0;
    }
    100%{
      margin-top: 1rem;
      opacity: 1;
    }
`

export const AllCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 3rem;
`

export const CalCardBoxStyle = styled.div`
  position: relative;
  background: white;
  border: none;
  width: 20rem;
  padding: 6px;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover,
  &:focus-within,
  &:active{
    transform: scale(1.02);
    box-shadow: #00000047 0 0 14px;
    z-index: 10;
  }    
   animation: ${animationCards} 1s;
   
  @media(max-width: 767px){
    width: 100%;
  }
`

export const CoverImage = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center ;
  height: 30rem;
  margin-bottom: 1rem;
`

export const TitleStyle = styled.h4`
  font-size: 1.2rem;
  line-height: 1;
`

export const YearStyle = styled.p`
  line-height: 1;
`

export const BadgeStyle = styled.div`
  position: absolute;
  background: rgba(0,0,0,0.5);
  color: white;
  padding: 0 6px;
  top: 1rem;
  text-transform: uppercase;
`

export const SearchWrapperStyle = styled.div`
transition: top 0.5s;
    width: 50%;
    position:absolute;
    top:  ${props => props.curPosition === 'center' ? '50%' : '8rem'};
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
     @media(max-width: 767px){
        width: 90%;
     }
     input{
      border-radius: 20px 0 0 20px;
     }
     button{
        border-radius: 0 20px 20px 0 !important;
     }
`

export const AddFavoriteButtonSyle = styled(ButtonStyle)`
  margin-bottom: 2rem;
  background: white;
  color: ${mainColor};
  border: 1px solid ${mainColor};
  transition: all 0.2s;
  &:hover{
    background-color: ${mainHoverColor};
  }
`

export const FavoritesTitleStyle = styled.h1`
  text-align: center;
  margin: -2rem 0 -1rem 0;
  @media(max-width: 767px){
    margin: -3rem 0;
  }
`

