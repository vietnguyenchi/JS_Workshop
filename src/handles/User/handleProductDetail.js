import instance from "../../apis";

const handleProductDetail = async function (data) {
    const id = data.id;
    const productDetail = document.getElementById('productDetail');
    if (id) {
        instance.get(`products/${id}`).then(({data}) => {
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
                                    <li><a class="active" href="#"><span>Category</span> : Household</a></li>
                                    <li><a href="#"><span>Availibility</span> : ${data.quantity}</a></li>
                                </ul>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                    something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                    during the winter.</p>
                                <div class="product_count">
                                    <label for="qty">Quantity:</label>
                                    <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty">
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                    class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                    <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                    class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                                </div>
                                <div class="card_area d-flex align-items-center">
                                    <a class="primary-btn" href="#">Add to Cart</a>
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
    }
}

export default handleProductDetail;