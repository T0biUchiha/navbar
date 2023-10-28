import React from 'react'

const Links = ({links}) => {
    console.log(links);
  return (
    <div style={{display:"flex",width:"40%",marginTop:"20px",justifyContent:"space-evenly",color:"white"}}>
    {
        links.map((link)=>(
            <div key={link}>{link}</div>
        ))
    }
    </div>
  )
}

export default Links