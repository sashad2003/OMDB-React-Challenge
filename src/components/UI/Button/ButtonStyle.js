import styled from 'styled-components';

const mainColor = '#1890ff';
const mainHoverColor = '#147bdb';

const ButtonStyle = styled.button`
    background: ${mainColor};
    text-transform: uppercase;
    border: none;
    color: white;
    padding: 0.3rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 30px;
    &:hover,
    &:active {
      background: ${mainHoverColor};
     }
    
     
     &:disabled, &:focus:disabled, &:hover:disabled, &:active:disabled {
          background: #ccc;
          border-color: #ccc;
          color: #666666;
          cursor: not-allowed;
     } 
     
`


export default ButtonStyle;