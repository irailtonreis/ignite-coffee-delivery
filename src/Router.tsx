import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import OrderConfirmed from './pages/OrderConfirmed'

export function Router() {
    return (
      <Routes>
        <Route>
          <Route path="/" Component={Home} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/orderConfirmed" Component={OrderConfirmed} />
        </Route>
      </Routes>
    )
  }