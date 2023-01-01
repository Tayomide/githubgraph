import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export const GithubModel = (props) => {
  const model = useLoader(GLTFLoader, "/GithubIcon.glb")
  return (
    <primitive object={model.scene} {...props} />
  )
}
