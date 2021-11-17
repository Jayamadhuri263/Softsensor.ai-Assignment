import {Route, Switch} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import ProductsRoute from './components/ProductsRoute'
import CartRoute from './components/CartRoute'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductsRoute} />
      <Route exact path="/cart" component={CartRoute} />
    </Switch>
  </>
)

export default App
