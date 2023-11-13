import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import OrderConfirmed from "./pages/OrderConfirmed";
import { DefaultLayout, DefaultContainer } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </DefaultLayout>
      <DefaultContainer>
        <Routes>
          <Route path="/checkout" Component={Checkout} />
          <Route path="/orderConfirmed" Component={OrderConfirmed} />
        </Routes>
      </DefaultContainer>
    </>
  );
}
