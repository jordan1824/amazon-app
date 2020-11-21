import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

// Components
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import StarRating from './StarRating'

function ProductDetail(props) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products')
        const currentProduct = response.data.find(product => product.id == id)
        setProduct(currentProduct)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchProducts()
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
