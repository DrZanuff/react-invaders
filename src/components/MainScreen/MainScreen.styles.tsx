import styled from 'styled-components'

export const MainScreenContainer = styled.div`
  display: flex;
  min-width: 320px;
  height: 100%;
  justify-content: center;

  margin: 0 auto;

  background-image: url('/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 512px) {
    width: 100%;
  }
`
