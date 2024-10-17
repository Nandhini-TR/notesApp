import styled from 'styled-components'

export const BgContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 40px;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 30px;
  font-weight: bold;
  color: #4c63b6;
  margin-bottom: 50px;
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
    font-size: 20px;
  }
`

export const TextContainer = styled.form`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border: 0px none;
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 300px;
  width: 500px;
  @media screen and (max-width: 576px) {
    height: 150px;
    width: 300px;
  }
`
export const Title = styled.input`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  color: #475569;
  margin-bottom: 30px;
  border: 0px none;
  background: transparent;
  @media screen and (max-width: 576px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`

export const TextArea = styled.textarea`
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  border: 0px none;
  background: transparent;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const AddButton = styled.button`
  border: 0px none;
  padding: 10px;
  text-align: center;
  border-radius: 7px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4c63b6;
  align-self: flex-end;
  margin-top: 20px;
  width: 80px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
  }
`
export const NoNotesContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
  }
`

export const NoNotesImage = styled.img`
  height: 50px;
  width: 50px;
  @media screen and (max-width: 576px) {
    height: 30px;
    width: 30px;
  }
`

export const NoNotesHeading = styled.h1`
  color: #334155;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`
export const NoNotesDescription = styled.p`
  color: #475569;
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const UlListContainer = styled.ul`
  list-style-type: none;
  margin-top: 30px;
  display: flex;
  padding: 20px;
  @media screen and (max-width: 576px) {
    margin-top: 10px;
    flex-direction: column;
  }
`
