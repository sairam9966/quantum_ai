import React from 'react'
import ResignationCard from '../ResignationCard/ResignationCard'

export default function Resignation() {
  return (
    <div style={{padding:"1rem"}}>
      <h1 style={{ marginBottom: "1rem" }}>Resignations</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />


      </div>
    </div>

  )
}
