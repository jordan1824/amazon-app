import React, { useEffect } from 'react'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import ProductBlock from './ProductBlock'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'

function Home(props) {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
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
