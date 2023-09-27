import { atom } from 'jotai'
import type { GridLayout, Agent } from './GlobalAtoms.types'

export const gridAtom = atom<GridLayout>({
  h: 5,
  w: 7,
})

const player: Agent = {
  x: 2,
  y: 6,
  agent: 'player',
  status: {
    life: 3,
    shotCooldown: 1,
  },
}

export const currentBoardStateAtom = atom<Agent[]>([player])
