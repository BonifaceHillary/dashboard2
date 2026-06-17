import React from 'react'
import "./featured.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';



import CircularProgress from '@mui/material/CircularProgress';

import Typography from '@mui/material/Typography';

const Featured = () => {
  return (




    <div className='featured'>
      <div className="top">
        <h1 className="title">total revenue</h1>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className="bottom">
         <div className="featuredchart"> 





          <div style={{ position: "relative", display: "inline-flex" }}>
  <CircularProgress
    variant="determinate"
    value={70}
    size={120}
  />
  <Typography
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    70%
  </Typography>
</div>




        
          
        </div> 
      </div>
   </div>








  )
}

export default Featured
