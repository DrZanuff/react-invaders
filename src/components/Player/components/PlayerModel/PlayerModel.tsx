/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { Object3D } from 'three'
import { useFrame } from '@react-three/fiber'
import { animated } from '@react-spring/three'
import * as THREE from 'three'

export function PlayerModel() {
  const primitiveRef = useRef<Object3D | undefined>()
  // const primitiveRef = useRef<any>()

  const playerModel = useGLTF('./models/player.glb')

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (primitiveRef.current) {
      primitiveRef.current.rotation.z = THREE.MathUtils.lerp(
        primitiveRef.current.rotation.z,
        Math.sin(t / 10) / 4,
        0.1
      )

      primitiveRef.current.rotation.z = THREE.MathUtils.lerp(
        primitiveRef.current.rotation.z,
        (-2 + Math.sin(t)) / 3,
        0.1
      )
    }
  })

  // const { opacity } = useSpring({
  //   from: { opacity: 1 },
  //   to: { opacity: -1 },
  //   // loop: true,
  //   // reverse: true,
  //   config: {
  //     duration: 600,
  //   },
  // })

  return (
    // <primitive
    //   object={playerModel.scene}
    //   position={[0, 0, 2.5]}
    //   rotation={[1.2, 0, 0]}
    // />

    // <animated.mesh
    //   // ref={primitiveRef}
    //   rotation={[0, 0, rot]}
    //   // position={[0, 0, 2.5]}
    // >
    //   <primitive
    //     object={playerModel.scene}
    //     position={[0, 0, 2.5]}
    //     rotation={[1.2, 0, 0]}
    //   />
    // </animated.mesh>
    // @ts-ignore
    <animated.primitive
      ref={primitiveRef}
      object={playerModel.scene}
      position={[0, 0, 2.5]}
      rotation={[
        Math.PI / 2,
        0,
        primitiveRef.current ? primitiveRef.current.rotation.z : 0,
      ]}
    />
  )
}
