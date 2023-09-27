import { AgentTypes } from '../../GlobalAtoms/GlobalAtoms.types'

export interface Cell {
  x: number // X coordinate
  y: number // Y coordinate
  agent: AgentTypes
}
