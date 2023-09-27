import { Cell } from './create2DArrayWithCells.types'

export function create2DArrayWithCells(rows: number, cols: number): Cell[][] {
  const emptyGrid: Cell[][] = []

  for (let i = 0; i < rows; i++) {
    const row: Cell[] = []
    for (let j = 0; j < cols; j++) {
      // Create a Cell object for each element in the 2D array
      const cell: Cell = {
        x: i, // Assign X coordinate
        y: j, // Assign Y coordinate
        agent: 'empty', // Initialize agent property to 'empty'
      }
      row.push(cell)
    }
    emptyGrid.push(row)
  }

  return emptyGrid
}
