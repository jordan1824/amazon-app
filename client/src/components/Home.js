import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import ProductBlock from './ProductBlock'

function Home(props) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products')
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return <Loader />
  }
  if (error) {
    return <ErrorMessage message={error} />
  }
  return (
    <div className="product-blocks-container">
      {products.map(product => (
        <ProductBlock key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home
