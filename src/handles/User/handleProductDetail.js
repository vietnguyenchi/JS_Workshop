import instance from "../../apis";

const handleProductDetail = async function (data) {
    const id = data.id;
    const productDetail = document.getElementById('productDetail');
    if (id) {
        await instance.get(`products/${id}`).then(({data}) => {
            productDetail.innerHTML = /*html*/`
                <!--================Single Product Area =================-->
                <div class="container">
                    <div class="row s_product_inner">
                        <div class="col-lg-6">
                            <div class="s_Product_carousel">
                                <div class="single-prd-item">
                                    <img class="img-fluid w-100" src="${data.image}" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="s_product_text">
                                <h3>${data.title}</h3>
                                <h2>$${data.price * ((100 - data.discount)/100)}</h2>
                                <ul class="list">
                                    <li><a class="active" href="#"><span>Category</span> : ${data.category}</a></li>
                                    <li><a href="#"><span>Availibility</span> : ${data.quantity}</a></li>
                                </ul>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                    something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                    during the winter.</p>
                                <div class="product_count">
                                    <label for="qty">Quantity:</label>
                                    <input placeholder="0" type="text" name="qty" id="sst" maxlength="12" title="Quantity:" class="input-text qty">
                                    <button class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                    <button class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                </div>
                                <div class="card_area d-flex align-items-center">
                                    <button data-id-pro="${data.id}" id="add_to_cart_btn" class="primary-btn border border-0">Add to Cart</button>
                                    <a class="icon_btn" href="#"><i class="lnr lnr lnr-diamond"></i></a>
                                    <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--================End Single Product Area =================-->
            `
        });

        const add_to_cart_btn = document.getElementById('add_to_cart_btn');
        const quantity = document.querySelector('input[name="qty"]');
        const id_pro = add_to_cart_btn.getAttribute('data-id-pro');
        add_to_cart_btn.addEventListener('click', () => {
            addToCart(id_pro, quantity.value);
        })

        // Increment quantity
        const increase = document.querySelector('.increase');
        increase.addEventListener('click', () => {

            quantity.value = Number(quantity.value) + 1;

        })

        // Reduce quantity
        const reduced = document.querySelector('.reduced');
        reduced.addEventListener('click', () => {
            quantity.value = Number(quantity.value) - 1;
            if (Number(quantity.value) <= 0) {

                quantity.value = 0;

            }
        })
    }
}

const addToCart = async function (id, quantity) {
    
    if (Number(quantity > 0)) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const cart = user.cart;
        

        const new_product = {
            id_pro: Number(id),
            quantity: Number(quantity)
        }

        cart.some(product => product.id_pro === new_product.id_pro) ? cart.find(product => product.id_pro === Number(id)).quantity += Number(quantity) : cart.push(new_product);

        user.cart = cart;

        await instance.patch(`/users/${user.id}`, user);
        sessionStorage.setItem('user', JSON.stringify(user));
        alert('Add product to cart successfully');
    } else {

        alert ("Please enter the quantity");

    }
    
}

export default handleProductDetail;