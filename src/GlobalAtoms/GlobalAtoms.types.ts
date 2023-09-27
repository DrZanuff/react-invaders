import { Cell } from '../helpers/create2DArrayWithCells/create2DArrayWithCells.types'

export interface GridLayout {
  w: number
  h: number
}

export type AgentTypes = 'empty' | 'player' | 'enemy'

interface AgentStatus {
  life: number
  shotCooldown: number
}

export interface Agent extends Cell {
  status?: AgentStatus
}
