import {Link} from 'react-router-dom'
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, price, description, category, image, rate} = productData

  return (
    <li className="product-item">
      <img src={image} alt="product" className="thumbnail" />
      <p className="category">{category}</p>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="product-details">
        <p className="price">Rs {price}/-</p>
        <div className="rating-container">
          <p className="rating">{rate}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
      <Link to="/cart" className="add-to-cart-container">
        <button type="button" className="cart-display">
          Add to Cart
        </button>
      </Link>
    </li>
  )
}
export default ProductCard
