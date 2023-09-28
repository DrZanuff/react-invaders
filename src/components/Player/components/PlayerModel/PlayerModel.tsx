import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { Object3D } from 'three'
import { useFrame } from '@react-three/fiber'

export function PlayerModel() {
  const primitiveRef = useRef<Object3D | undefined>()

  const playerModel = useGLTF('./models/player.glb')

  useFrame((_, delta) => {
    if (primitiveRef.current) {
      primitiveRef.current.rotation.z += delta
    }
  })

  return (
    <primitive
      object={playerModel.scene}
      ref={primitiveRef}
      position={[0, 0, 2.5]}
      rotation={[1.2, 0, 0]}
    />
  )
}
