import { Cell } from '../create2DArrayWithCells/create2DArrayWithCells.types'
import { Agent, GridLayout } from '../../GlobalAtoms/GlobalAtoms.types'

export function fillBoardWithAgents(
  grid: Cell[][],
  agents: Agent[],
  gridSize: GridLayout
) {
  const newGrid = JSON.parse(JSON.stringify(grid)) as Agent[][]

  agents.forEach((agent) => {
    const isInvalidPosition =
      agent.x < 0 ||
      agent.y < 0 ||
      agent.x - 1 > gridSize.w ||
      agent.y - 1 > gridSize.h

    if (!isInvalidPosition) {
      const coordX = agent.x
      const coordY = agent.y

      newGrid[coordY][coordX] = agent
    }
  })

  return newGrid
}
