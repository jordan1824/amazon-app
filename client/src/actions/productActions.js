import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_ERROR } from '../constants/productConstants'
import Axios from 'axios'

export const listProducts = () => async dispatch => {
  dispatch({
    type: PRODUCT_LIST_REQUEST
  })
  try {
    const response = await Axios.get('/api/products')
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message })
  }
}

export const getProductDetails = id => async dispatch => {
  dispatch({ type: PRODUCT_DETAILS_REQUEST })
  try {
    const response = await Axios.get('/api/products')
    const currentProduct = response.data.find(product => product.id == id)
    if (currentProduct) {
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: currentProduct })
    } else {
      throw new Error('Sorry, the product you are searching for could not be found.')
    }
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error.message })
  }
}
