import React from 'react'

export default function ApplicationDetails() {
  return (
    <div style={{overflow:"scroll",overflowX:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100vw",backgroundColor:"white",boxShadow:"10px 10px 10px rgba(0,0,0,0.5)",borderBottomLeftRadius:"1rem",paddingTop:"1rem",paddingBottom:"1rem",position:"fixed"}}>
        <p style={{width:"10%",textAlign:"center",fontSize:20,fontWeight:"600"}}>S.No</p>
        <p style={{width:"20%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Name</p>
        <p style={{width:"10%",textAlign:"center",fontSize:20,fontWeight:"600"}}>ATS Score</p>
        <p style={{width:"15%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Contact Number</p>
        <p style={{width:"16%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Email</p>
        <p style={{width:"16%",textAlign:"center",fontSize:20,fontWeight:"600"}}>Resume</p>
      </div>
      <div>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>
        <ApplicationDetailsCard/>

        
      </div>
    </div>
  )
}


const ApplicationDetailsCard = ()=>{
  return(
    <div style={{marginTop:"1rem"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100vw",paddingTop:"1rem",paddingBottom:"1rem"}}>
        <p style={{width:"10%",textAlign:"center",fontSize:16,fontWeight:"400"}}>1 .</p>
        <p style={{width:"20%",textAlign:"center",fontSize:16,fontWeight:"400"}}>Akhil</p>
        <p style={{width:"10%",textAlign:"center",fontSize:16,fontWeight:"400"}}>70%</p>
        <p style={{width:"15%",textAlign:"center",fontSize:16,fontWeight:"400"}}>+91 6305600913</p>
        <p style={{width:"16%",textAlign:"center",fontSize:16,fontWeight:"400"}}>akhildharmana0402@gmail.com</p>
        <p style={{width:"16%",textAlign:"center",fontSize:16,fontWeight:"400"}}>Resume</p>
      </div>
      <div style={{paddingLeft:"4rem"}}>
        <p style={{fontSize:20,fontWeight:"600"}}>Summary</p>
        <p style={{width:"90%",backgroundColor:"white",boxShadow:"10px 10px 10px rgba(0,0,0,0.3)",borderRadius:"1rem",padding:"1rem",}}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. At incidunt atque ab, doloribus culpa, voluptatem ut fugit est illo minima explicabo id corrupti quas commodi eaque dolor odio sequi voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita dolore cum ex quidem magni, ratione maxime ullam placeat harum aspernatur velit illo aut a aliquid? Voluptates ad voluptatibus similique.
        </p>
      </div>
      <div style={{marginTop:"1.5rem",borderBottomWidth:2,borderBottomColor:"gray",borderStyle:"solid",width:"90%"}}></div>
    </div>
  )
}