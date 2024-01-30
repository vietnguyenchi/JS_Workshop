import instance from "../../apis";


const handleProductsList = async () => {
    const productsList = document.querySelector('#productsList');

    try {
        const { data } = await instance.get(`/products`);

        if (data) {
            const contentHTML = data.map(product => {
                return /*html*/`
                <div class="col-lg-4 col-md-6">
                    <div class="single-product">
                        <img class="img-fluid" src="${product.image}" alt="">
                        <div class="product-details">
                            <h6>${product.title}</h6>
                            <div class="price">
                                <h6>$${product.price * ((100 - product.discount)/100)}</h6>
                                <h6 class="l-through">$${product.price}</h6>
                            </div>
                            <div class="prd-bottom">

                                <a href="" class="social-info">
                                    <span class="ti-bag"></span>
                                    <p class="hover-text">add to bag</p>
                                </a>
                                <a href="" class="social-info">
                                    <span class="lnr lnr-heart"></span>
                                    <p class="hover-text">Wishlist</p>
                                </a>
                                <a href="" class="social-info">
                                    <span class="lnr lnr-sync"></span>
                                    <p class="hover-text">compare</p>
                                </a>
                                <a href="/product_detail/${product.id}" class="social-info">
                                    <span class="lnr lnr-move"></span>
                                    <p class="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }).join('');
            productsList.innerHTML = contentHTML;
        }
    } catch (e) {
        console.log(e);
    }
}

export default handleProductsList;