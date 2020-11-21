import React from 'react'
import StarRating from './StarRating'

function ProductBlock({ product }) {
  return (
    <div className="product-block">
      <div className="product-block__img-container">
        <img className="product-block__img" src={product.image} alt={product.name} />
      </div>
      <div className="product-block__info-container">
        <h2 className="product-block-title">{product.name}</h2>
        <StarRating rating={product.rating} count={product.numReviews} />
        <p className="product-block-price">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductBlock
