import { Canvas } from '@react-three/fiber'
import * as S from './Player.styles'
import { PlayerModel } from './components/PlayerModel'

export function Player() {
  return (
    <S.PlayerContainer>
      <Canvas>
        <directionalLight
          color="white"
          position={[0, 0, 3]}
          rotation={[-2, 0, 0]}
          intensity={5}
        />
        <PlayerModel />
      </Canvas>
    </S.PlayerContainer>
  )
}
