import {Component} from 'react'
import Loader from 'react-loader-spinner'

import ProductCard from '../ProductCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  inProgress: 'IN_PROGRESS',
}

class AllProductsSection extends Component {
  state = {productsList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const apiUrl = 'https://fakestoreapi.com/products'
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updatedData = data.map(product => ({
        title: product.title,
        category: product.category,
        price: product.price,
        id: product.id,
        image: product.image,
        description: product.description,
        rate: product.rating.rate,
        count: product.rating.count,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    }
  }

  renderProductsListView = () => {
    const {productsList} = this.state
    return (
      <ul className="products-list">
        {productsList.map(product => (
          <ProductCard productData={product} key={product.id} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="all-products-section">{this.renderAllProducts()}</div>
    )
  }
}

export default AllProductsSection
