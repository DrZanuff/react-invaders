import styled from 'styled-components'

export const GridContainer = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* display: grid;
  grid-template-columns: repeat(5, 80px); */
  /* grid-template-columns: repeat(5, minmax(80px auto)); */
  /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */
  /* grid-gap: 0px; */
`

export const CellSpace = styled.div`
  width: 96px;
  height: 98px;
  border: 1px dotted rgba(255, 255, 255, 0.3);

  @media (max-width: 512px) {
    width: 70px;
    height: 75px;
  }
`

export const EmptySpace = styled(CellSpace)``

export const GridRow = styled.div`
  display: flex;
  width: 100%;
  /* max-height: 96px; */
  /* max-height: 80px; */
  /* min-height: 80px;
  max-height: 80px; */
  /* max-height: 80px;
  min-height: 80px; */
`
