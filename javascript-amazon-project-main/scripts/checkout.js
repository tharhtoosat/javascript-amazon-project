import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import { Cart } from "../data/cart-class.js";

async function loadPage() {
  await loadProductsFetch();

  await loadCart();

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();
