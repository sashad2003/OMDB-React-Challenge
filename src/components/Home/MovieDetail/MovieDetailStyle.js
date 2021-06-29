import styled from 'styled-components';

const mobile='max-width: 767px';

export const MovieDetailStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (${mobile}){
    flex-direction: column;
  }
`

export const DescriptionStyle = styled.div`
  padding: 0 2rem;
   @media (${mobile}){
   padding: 0;
   margin-top: 1rem;
   }
`

export const TextTitleStyle = styled.h2`
font-size: 2rem;
@media (${mobile}){
  font-size: 1.4rem;
}
`

export const ImdbRatingStyle = styled.span`
    font-size: 1.4rem;
    line-height: 1;
    color: #1890ff;
`

export const TagsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`