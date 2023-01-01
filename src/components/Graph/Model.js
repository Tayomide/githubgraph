import { useEffect, useState } from 'react'
import { ContributionGraph } from './ContributionGraph'
import { GithubGraph } from './GithubGraph'
import { GithubModel } from './GithubModel'
import { Text3D } from '@react-three/drei'

export const Model = ({user, year}) => {
  const [commitGraph, setCommitGraph] = useState()
  const GithubAPI = require("../../API/GithubApi")

  useEffect(() => {
    GithubAPI.getCommitGraph(user, parseInt(year))
    .then(response => response.json())
    .then(response => {setCommitGraph(response.data.user.contributionsCollection.contributionCalendar.weeks)})
  }, [GithubAPI, user, year])

  return (
    <>
      <group scale={0.3} position={[-commitGraph?.length * (0.3 / 4) || 0, 0, 0]}>
        <GithubGraph commitGraph={commitGraph}/>
        <ContributionGraph commitGraph={commitGraph}/>
      </group>
      <GithubModel
        rotation={[Math.PI* 0.35241638235, 0, 0]}
        scale={75}
        position={[-commitGraph?.length * (0.3 / 4), -1 * 0.6, 4.25 * 0.3]}
      />
      <Text3D font="/helvetiker_regular.typeface.json"
        scale={0.3}
        rotation={[-Math.PI*(0.5 - 0.35241638235), 0, 0]}
        position={[-commitGraph?.length * (0.3 / 4) + 1, -1.4 * 0.3, 4 * 0.3]}
      >
        { user.toLowerCase() || "loading..."}
        <meshPhongMaterial color="#494a56" />
      </Text3D>
      <Text3D font="/helvetiker_regular.typeface.json"
        scale={0.3}
        rotation={[-Math.PI*(0.5 - 0.35241638235), 0, 0]}
        position={[commitGraph?.length * (0.3 / 4) -1, -1.4 * 0.3, 4 * 0.3]}
      >
        { year || "loading..."}
        <meshPhongMaterial color="#494a56" />
      </Text3D>
    </>
  )
}
