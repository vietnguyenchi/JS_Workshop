import Header from "../../components/header"
import Footer from "../../components/Footer"

const Cart = () => {
    return /*html*/`
            ${Header()}
            <!-- Start Banner Area -->
            <section class="banner-area organic-breadcrumb">
                <div class="container">
                    <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div class="col-first">
                            <h1>Shopping Cart</h1>
                            <nav class="d-flex align-items-center">
                                <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                                <a href="category.html">Cart</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Banner Area -->

            <!--================Cart Area =================-->
            <section class="cart_area">
                <div class="container p-0">
                    <div class="cart_inner">
                        <div class="table-responsive-lg border" style="height: 550px; overflow-y: scroll;">
                            <table class="table">
                                <thead class="sticky-top border shadow z-1">
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody id="productList">
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    <div class="cart_inner">
                        <div class="table-responsive-lg border">
                            <table class="table">
                                <tbody>
                                    <tr class="bottom_button">
                                            <td>
                                                <a class="gray_btn" href="#">Update Cart</a>
                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <div class="cupon_text d-flex align-items-center">
                                                    <input type="text" placeholder="Coupon Code">
                                                    <a class="primary-btn" href="#">Apply</a>
                                                    <a class="gray_btn" href="#">Close Coupon</a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <h5>Subtotal:</h5>
                                            </td>
                                            <td>
                                                <h5 id="total_price" class="text-danger fw-bold">$2160.00</h5>
                                            </td>
                                        </tr>
                                        <tr class="out_button_area">
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                <div class="checkout_btn_inner d-flex align-items-center">
                                                    <a class="gray_btn" href="#">Continue Shopping</a>
                                                    <a class="primary-btn" href="#">Proceed to checkout</a>
                                                </div>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </div>
            </section>
            <!--================End Cart Area =================-->
            ${Footer()}
    `;
}

export default Cart;