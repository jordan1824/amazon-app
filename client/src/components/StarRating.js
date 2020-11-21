import React from 'react'

function StarRating({ rating, count }) {
  let stars = []
  for (var i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="fa star fa-star" aria-hidden="true"></i>)
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="fa star fa-star-half-o" aria-hidden="true"></i>)
    } else {
      stars.push(<i key={i} className="fa star fa-star-o" aria-hidden="true"></i>)
    }
  }
  return (
    <div className="stars-container">
      <div>{stars}</div>
      <div>({count} Reviews)</div>
    </div>
  )
}

export default StarRating
