import React from 'react'

const ReviewDetial = ({params}) => {
  return (
    <div>
      <p>review {params.reviewId} for  product{params.productId}</p>
    </div>
  )
}

export default ReviewDetial
