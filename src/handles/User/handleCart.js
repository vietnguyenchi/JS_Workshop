import instance from "../../apis";

const handleCart = async function () {
    const productList = document.getElementById("productList");
    const { cart } = JSON.parse(sessionStorage.getItem("user"));

    const { data } = await instance.get('/products');
    const contentHTML = data.map(product => {
        for (const pro_cart of cart) {
            if (pro_cart.id_pro === product.id) {
                return /*html*/`
                    <tr>
                        <td>
                            <div class="media ms-1">
                                <div class="d-flex">
                                    <img width="100" src="${product.image}" alt="">
                                </div>
                                <div class="media-body">
                                    <strong>${product.title}</strong>
                                </div>
                            </div>
                        </td>
                        <td>
                            <h5>${USDollar.format(product.price)}</h5>
                        </td>
                        <td>
                            <div class="product_count">
                                <input type="text" name="qty" id="sst" maxlength="12" value="${pro_cart.quantity}" title="Quantity:"
                                    class="input-text qty z-0">
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                                    class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                                    class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
                            </div>
                        </td>
                        <td>
                            <h5 class="total_price" data-total-price="${product.price * pro_cart.quantity}">${USDollar.format(product.price * pro_cart.quantity)}</h5>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2 z-1">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                            </svg>
                        </td>
                    </tr>
                `;
            }
        }
    }).join('');
    productList.innerHTML = contentHTML;
    totalAmount();

}

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const totalAmount = async function () {
    try {
        const { id } = JSON.parse(sessionStorage.getItem('user'));
        const user = await instance.get(`/users/${id}`);
        const cart = user.data.cart;
        const { data } = await instance.get('products');
        const amount = cart.reduce((acc, cur) => {
            for (let item of data) {
                if (cur.id_pro === item.id) {
                    return acc + (cur.quantity * Number(item.price));
                }
            }
        }, 0);
        document.querySelector('#total_price').textContent = USDollar.format(amount);
    } catch (error) {
        console.log(error);
    }
}

export default handleCart;