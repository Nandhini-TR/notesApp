import styled from 'styled-components'

export const ListContainer = styled.li`
  border: 1px solid #d8d8d8;
  height: 150px;
  width: 350px;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 350px;
  }
`
export const ListHeading = styled.h1`
  color: #334155;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const ListNotes = styled.p`
  color: #334155;
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 10px;
  }
`
