import { Canvas } from '@react-three/fiber'
// import type { PlayerProps } from './Player.types'
import * as S from './Player.styles'

export function Player() {
  return (
    <S.PlayerContainer>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </S.PlayerContainer>
  )
}
