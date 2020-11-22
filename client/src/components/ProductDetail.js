import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetails } from '../actions/productActions'

// Components
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import StarRating from './StarRating'

function ProductDetail(props) {
  const { id } = useParams()
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { product, loading, error } = productDetails

  useEffect(() => {
    dispatch(getProductDetails(id))
  }, [id])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorMessage message={error} />
  }
  return (
    <div className="product-details-page">
      <Link to="/" className="product-details-link">
        Back to result
      </Link>
      <div className="product-details">
        <div className="product-details__img-container">
          <img src={product.image} alt={product.name} className="product-details__img" />
        </div>
        <div className="product-details__info-container">
          <h2 className="product-details__title">{product.name}</h2>
          <StarRating rating={product.rating} count={product.numReviews} />
          <p>Price: ${product.price}</p>
          <p>Description:</p>
          <p>{product.description}</p>
        </div>
        <div className="product-details__cta-container">
          <div className="product-details__cta-block">
            <p className="product-details__cta-block-label">Price:</p>
            <p className="product-details__cta-block-item">${product.price}</p>
          </div>
          <div className="product-details__cta-block">
            <p className="product-details__cta-block-label">Status:</p>
            {product.countInStock > 0 ? <p className="product-details__cta-block-item available">In Stock</p> : <p className="product-details__cta-block-item unavailable">Unavailable</p>}
          </div>
          <button className="btn btn-block" disabled={product.countInStock <= 0}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
