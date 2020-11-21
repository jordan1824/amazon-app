import React from 'react'
import StarRating from './StarRating'
import { Link } from 'react-router-dom'

function ProductBlock({ product }) {
  return (
    <div className="product-block">
      <div className="product-block__img-container">
        <Link to={`/product/${product.id}`}>
          <img className="product-block__img" src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-block__info-container">
        <Link to={`/product/${product.id}`}>
          <h2 className="product-block-title">{product.name}</h2>
        </Link>
        <StarRating rating={product.rating} count={product.numReviews} />
        <p className="product-block-price">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductBlock
