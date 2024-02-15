import { checkLogin } from "../utilities";

const Header = () => {
    return /*html*/`
        <!-- Start Header Area -->
        <header class="header_area sticky-header z-3">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light main_box">
                    <div class="container">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <a class="navbar-brand logo_h" href=""><img src="img/logo.png" alt=""></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div class="collapse navbar-collapse offset ms-5" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto">
                                <li class="nav-item active"><a href="/" class="nav-link" href="index.html">Home</a></li>
                                <li class="nav-item submenu dropdown">
                                    <a href="/products" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Shop</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a href="/products" class="nav-link" href="category.html">Shop Category</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-product.html">Product
                                                Details</a></li>
                                        <li class="nav-item"><a class="nav-link" href="checkout.html">Product Checkout</a>
                                        </li>
                                        <li class="nav-item"><a class="nav-link" href="cart.html">Shopping Cart</a></li>
                                        <li class="nav-item"><a class="nav-link" href="confirmation.html">Confirmation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                                        <li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                                        <li class="nav-item"><a class="nav-link" href="tracking.html">Tracking</a></li>
                                        <li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right ms-auto">
                                <li class="nav-item">
                                    <button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
                                </li>
                                <li class="nav-item submenu dropdown mt-3 me-3 position-relative">
                                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" class="lucide lucide-circle-user-round">
                                            <path d="M18 20a6 6 0 0 0-12 0" />
                                            <circle cx="12" cy="10" r="4" />
                                            <circle cx="12" cy="12" r="10" />
                                        </svg>
                                    </a>
                                    ${checkLogin()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <!-- End Header Area -->
    `;
}

export default Header;
// <div class="search_input" id="search_input_box">
//     <div class="container">
//         <form class="d-flex justify-content-between">
//             <input type="text" class="form-control" id="search_input" placeholder="Search Here">
//             <button type="submit" class="btn"></button>
//             <span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
//         </form>
//     </div>
// </div>