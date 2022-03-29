/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

export default function Headphone({ ...props }) {
  const group = useRef()
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.x = -Math.PI / 1.75 + Math.cos(t / 4) / 8
    ref.current.rotation.y = Math.sin(t / 4) / 8
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })
  const { nodes, materials } = useGLTF('/headphone.glb')
  return (
    // <Suspense fallback={null}>
      <group ref={ref} {...props} dispose={null}>
        <group rotation={[1.8, 0.5, 1.5]} scale={10.23}>
          <mesh geometry={nodes.Circle002.geometry} material={nodes.Circle002.material} position={[-0.07, 0.05, 0]} />
          <group position={[-0.07, 0.05, 0]}>
            <mesh geometry={nodes.Circle043.geometry} material={nodes.Circle043.material} />
            <mesh geometry={nodes.Circle043_1.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Circle043_2.geometry} material={materials['Material.003']} />
          </group>
          <mesh geometry={nodes.Circle006.geometry} material={materials.BlackLeazer} position={[-0.08, 0.05, -0.07]} />
          <mesh geometry={nodes.Circle007.geometry} material={materials.Metal} position={[0.01, 0.03, 0.11]} />
          <mesh geometry={nodes.Circle018.geometry} material={nodes.Circle018.material} position={[-0.07, 0.05, 0]} />
          <mesh geometry={nodes.Circle019.geometry} material={nodes.Circle019.material} position={[-0.07, 0.05, 0]} />
          <mesh geometry={nodes.Circle048.geometry} material={nodes.Circle048.material} position={[-0.07, 0.05, 0]} />
          <mesh geometry={nodes.Circle049.geometry} material={nodes.Circle049.material} position={[-0.07, 0.05, 0]} />
        </group>
      </group>
    // </Suspense>
  )
}

// useGLTF.preload('/headphone.glb')
