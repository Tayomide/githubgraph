import { useEffect, useRef} from 'react'

export const GithubGraph = ({commitGraph}) => {
  const geometry = useRef()
  useEffect(() => {
    if(commitGraph){
      geometry.current.computeVertexNormals()
    }
  }, [commitGraph])
  return (
    commitGraph && 
      <mesh position={[-0.251, 0.001, -0.251]} scale={[1.01, 1, 1.01]}>
        <bufferGeometry attach="geometry" ref={geometry} center>
          <bufferAttribute
          attach="attributes-position"
          count={36}
          itemSize={3}
          array={
            new Float32Array([
            0 - 2.5, -2, 0 - 1,
            commitGraph.length / 2 + 2.5, -2, 0 - 1,
            commitGraph.length / 2 + 2.5, -2, 3.5 + 1,
            commitGraph.length / 2 + 2.5, -2, 3.5 + 1,
            0 - 2.5, -2, 3.5 + 1,
            0 - 2.5, -2, 0 - 1,
            commitGraph.length / 2, 0, 3.5,
            commitGraph.length / 2, 0, 0,
            0, 0, 0,
            0, 0, 0,
            0, 0, 3.5,
            commitGraph.length / 2, 0, 3.5,
            0 - 2.5, -2, 0 - 1,
            0, 0, 0,
            commitGraph.length / 2, 0, 0,
            commitGraph.length / 2, 0, 0,
            commitGraph.length / 2 + 2.5, -2, 0 - 1,
            0 - 2.5, -2, 0 - 1,
            commitGraph.length / 2, 0, 3.5,
            0, 0, 3.5,
            0 - 2.5, -2, 3.5 + 1,
            0 - 2.5, -2, 3.5 + 1,
            commitGraph.length / 2 + 2.5, -2, 3.5 + 1,
            commitGraph.length / 2, 0, 3.5,
            0, 0, 3.5,
            0, 0, 0,
            0 - 2.5, -2, 0 - 1,
            0, 0, 3.5,
            0 - 2.5, -2, 0 - 1,
            0 - 2.5, -2, 3.5 + 1,
            commitGraph.length / 2 + 2.5, -2, 0 - 1,
            commitGraph.length / 2, 0, 0,
            commitGraph.length / 2, 0, 3.5,
            commitGraph.length / 2 + 2.5, -2, 3.5 + 1,
            commitGraph.length / 2 + 2.5, -2, 0 - 1,
            commitGraph.length / 2, 0, 3.5,
          ])}
        />
        </bufferGeometry>
        <meshPhongMaterial color="#494a56" />
      </mesh>
  )
}
