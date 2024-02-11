import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './pages/layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { OrderDetails } from './pages/OrderDetails'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-details" element={<OrderDetails />} />
      </Route>
    </Routes>
  )
}
