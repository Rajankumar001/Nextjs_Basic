import React from 'react'
// [] allows for dynamic routing
function ProjectDetails({params}) {
  return (
    <div>
      <h1>product details of item {params.productId}</h1>
    </div>
  )
}

export default ProjectDetails
