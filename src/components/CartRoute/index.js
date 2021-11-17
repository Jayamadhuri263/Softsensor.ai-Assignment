import {Link} from 'react-router-dom'
import './index.css'

const CartRoute = () => (
  <div className="cart-content-container">
    <Link to="/products" className="nav-link">
      <button className="back" type="button">
        Go to Products
      </button>
    </Link>

    <h1 className="cart-heading">My Cart</h1>
  </div>
)

export default CartRoute
