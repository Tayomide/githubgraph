import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useParams } from "react-router-dom"
import { Model } from "../components/Graph/Model"

export const Graph = () => {
  const params = useParams()
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[1,2,10]} intensity={1.5} />
      <pointLight position={[1,-2,-10]} intensity={1.5} />
      <OrbitControls />
      <Model user={params.user} year={params.year}/>
    </Canvas>
  )
}
