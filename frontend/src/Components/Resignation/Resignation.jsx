import React,{useState,useEffect} from 'react'
import ResignationCard from '../ResignationCard/ResignationCard'
import axios from 'axios'
export default function Resignation() {
  const [resignations,setResignations] = useState([])
  useEffect(()=>{
      const getResignations = ()=>{
        axios.get(`http://localhost:5000/api/getAllResignationRequests`).then((res)=>{
          console.log(res.data);
          setResignations(res.data);
        });
      }
      getResignations();
    },[])
  return (
    <div style={{padding:"1rem"}}>
      <h1 style={{ marginBottom: "1rem" }}>Resignations</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {/* <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard />
        <ResignationCard /> */}
        {
          resignations?.map((resignation)=>{
            return(
              <ResignationCard  resignation={resignation}/>
            )

          })
        }

      </div>
    </div>

  )
}
