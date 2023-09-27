import { gridAtom } from '../../GlobalAtoms'
import { useAtomValue } from 'jotai'
import { create2DArrayWithCells } from '../../helpers/create2DArrayWithCells'
import * as S from './MainScreen.styles'
import { Grid } from '../Grid'

export function MainScreen() {
  const { w, h } = useAtomValue(gridAtom)
  const grid = create2DArrayWithCells(w, h)

  return (
    <S.MainScreenContainer>
      <Grid grid={grid} />
    </S.MainScreenContainer>
  )
}
