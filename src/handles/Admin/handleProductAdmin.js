import axios from "axios";
import instance from "../../apis";

const handleProductsListAdmin = async function () {
    const productsList = document.querySelector('#productsList');

    await instance.get('/products').then(({ data }) => {
        const contentHTML = data.map((product, i) => {
            return /*html*/ `
            <tr class="align-middle">
                <td class="text-center">${i + 1}</td>
                <td>${product.title}</td>
                <td>$${product.price}</td>
                <td>
                    <div style="max-height: 100px; overflow: hidden;">
                        <img src="${product.image}" width="100" alt="">
                    </div>
                </td>
                <td>${product.brand}</td>
                <td>${product.category}</td>
                <td>${product.discount}%</td>
                <td>${product.quantity}</td>
                <td>
                    <button class="btn btn-info btn-sm shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </button>
                    <button class="btn btn-success btn-sm shadow-none btn-update" data-bs-toggle="modal" data-id-pro="${product.id}" data-bs-target="#update_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>
                    </button>
                    <button data-id-pro="${product.id}" class="btn btn-danger btn-delete btn-sm shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </button>
                </td>
            </tr>
            `
        }).join('');
        productsList.innerHTML = contentHTML;
    });

    const btns_update = document.querySelectorAll('.btn-update');
    const btns_delete = document.querySelectorAll('.btn-delete');
    for (const btn of btns_update) {
        const id = btn.getAttribute('data-id-pro');
        btn.addEventListener('click', () => setDataUpdate(id));
    }
    for (const btn of btns_delete) {
        const id = btn.getAttribute('data-id-pro');
        btn.addEventListener('click', () => deleteProduct(id));
    }
    const btn_update = document.getElementById('btn_update');
    btn_update.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn_update.getAttribute('data-id-pro');
        updateProduct(id);
    })

}

const addProduct = () => {
    const form = document.querySelector('#add_product_form');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const title = document.querySelector('#title').value;
        const price = document.querySelector('#price').value;
        const quantity = document.querySelector('#quantity').value;
        const brand = document.querySelector('#brand').value;
        const discount = document.querySelector('#discount').value;
        const category = document.querySelector('.cat_list').value;
        const description = document.querySelector('#description').value;
        const image = document.querySelector('#formFile');
        const image_pro = await upLoadFile(image.files[0]);

        const new_pro = {
            title: title,
            price: price,
            quantity: quantity,
            brand: brand,
            image: image_pro,
            discount: discount,
            category: category,
            description: description
        }
        instance.post('http://localhost:3000/products', new_pro).then((response) => {
            alert('Add product successfully');
            location.reload();
        });

    });

}

const upLoadFile = async function (file) {
    const CLOUD_NAME = "drxguvfuq";
    const PRESET_NAME = "web501-wd18329";
    const FOLDER_NAME = "JS-workshop";
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();

    formData.append('upload_preset', PRESET_NAME);
    formData.append('folder', FOLDER_NAME);
    formData.append('file', file);

    const response = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data', }
    });
    return response.data.secure_url;
}

const setDataUpdate = async function (id) {
    const { data } = await instance.get(`/products/${id}`);
    document.getElementById('title_update').value = data.title;
    document.getElementById('price_update').value = data.price;
    document.getElementById('quantity_update').value = data.quantity;
    document.getElementById('brand_update').value = data.brand;
    document.getElementById('discount_update').value = data.discount;
    document.getElementById('desc_update').value = data.description;
    document.getElementById('img_current').setAttribute('src', data.image);
    document.getElementById('btn_update').setAttribute('data-id-pro', data.id);

    const categories = document.getElementById('cat_update').childNodes;
    for (const option of categories) {
        if (option.value === data.category) {
            option.setAttribute('selected', true);
        }
    }
}

const deleteProduct = async function (id) {
    if (confirm('Are you sure you want to delete this product')) {
        try {
            await instance.delete(`/products/${id}`);
            alert('Delete product successfully');
        } catch (error) {
            console.log(error);
        }
        handleProductsListAdmin();
    }
}

const updateProduct = async function (id) {
    const title_update = document.getElementById('title_update').value;
    const price_update = document.getElementById('price_update').value;
    const quantity_update = document.getElementById('quantity_update').value;
    const brand_update = document.getElementById('brand_update').value;
    const discount_update = document.getElementById('discount_update').value;
    const desc_update = document.getElementById('desc_update').value;
    const img_update = document.getElementById('img_update');

    const pro_update = {
        title: title_update,
        price: price_update,
        quantity: quantity_update,
        discount: discount_update,
        desc: desc_update,
        brand: brand_update
    }

    if (img_update.files.length > 0) {
        const url_image = await upLoadFile(img_update.files[0]);
        try {
            await instance.patch(`/products/${id}`, { ...pro_update, image: url_image })
            alert("Update successfully");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            await instance.patch(`/products/${id}`, pro_update);
            alert("Update successfully");
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

}

export { handleProductsListAdmin, addProduct };