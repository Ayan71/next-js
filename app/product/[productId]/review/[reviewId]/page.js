import React from 'react'

const review = ({params}) => {
  return (
    <div>review number is {params.reviewId} and id is {params.productId}</div>
  )
}

export default review