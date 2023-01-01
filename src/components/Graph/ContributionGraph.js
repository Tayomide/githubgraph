export const ContributionGraph = ({ commitGraph }) => {
  return (
    commitGraph && commitGraph.map((obj, key) =>
      <group position={[key/2, 0, 0]} key={key}>
        {obj.contributionDays.map((childObj, childKey) => 
          <mesh position={[0, childObj.contributionCount  / 25 , childKey/2]} key={childKey}>
            <boxGeometry args={[0.5, childObj.contributionCount / 10, 0.5]} />
            <meshPhongMaterial color="#383941" emissive="#26263b"/>
          </mesh>
        )}
      </group>
    )
  )
}
