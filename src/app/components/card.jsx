import React from 'react'

const Card = ({children}) => {
    const cardstyle={
        padding:"100px",
        margin:"10px",
        border:"1px solid #ddd",
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }
  return (
    <div style={cardstyle}> 
      {children}
    </div>
  )
}

export default Card;
