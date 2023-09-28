import { currentBoardStateAtom, gridAtom } from '../../GlobalAtoms'
import { useAtomValue } from 'jotai'
import type { GridProps } from './Grid.types'
import * as S from './Grid.styles'
import { fillBoardWithAgents } from '../../helpers/fillBoardWithAgents'
import { Player } from '../Player'

export function Grid({ grid }: GridProps) {
  const boardState = useAtomValue(currentBoardStateAtom)
  const gridSize = useAtomValue(gridAtom)

  const board = fillBoardWithAgents(grid, boardState, gridSize)

  return (
    <S.GridContainer>
      {board.map((row, rowIndex) => (
        <S.GridRow key={`row-${rowIndex}`}>
          {row.map((cell, cellIndex) =>
            cell.agent === 'empty' ? (
              <S.EmptySpace key={`$cell_${cellIndex}-${rowIndex}`} />
            ) : (
              <Player key={`$player_${cellIndex}-${rowIndex}`} />
            )
          )}
        </S.GridRow>
      ))}
    </S.GridContainer>
  )
}
