import axios from "axios";
import instance from "../../apis";

const handleProductsListAdmin = () => {
    const productsList = document.querySelector('#productsList');

    instance.get('/products').then(({data}) => {
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
                    <button class="btn btn-success btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#update_product">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                        </svg>
                    </button>
                    <a href="#" class="btn btn-danger btn-sm shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                            <path d="M3 6h18" />
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            <line x1="10" x2="10" y1="11" y2="17" />
                            <line x1="14" x2="14" y1="11" y2="17" />
                        </svg>
                    </a>
                </td>
            </tr>
            `
        }).join('');
        productsList.innerHTML = contentHTML;
    })

} 

const addProduct = () => {
    const form = document.querySelector('#add_product_form');
    
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const title = document.querySelector('#title').value;
        const price = document.querySelector('#price').value;
        const quantity = document.querySelector('#quantity').value;
        const discount = document.querySelector('#discount').value;
        const category = document.querySelector('#cat_list').value;
        const description = document.querySelector('#description').value;
        const image = document.querySelector('#image');
        const image_pro = await upLoadFile(image.files[0]);
        
        const new_pro = {
            title: title,
            price: price,
            quantity: quantity,
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

    const upLoadFile = async function (file) {
        const CLOUD_NAME = "drxguvfuq";
        const PRESET_NAME = "web501-wd18329";
        const FOLDER_NAME = "JS-workshop";
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();

        formData.append('upload_preset', PRESET_NAME);
        formData.append('folder', FOLDER_NAME);
        formData.append('file', file);
        console.log(file);

        const response = await axios.post(api, formData, {
            headers: { 'Content-Type': 'multipart/form-data',}
        });
        return response.data.secure_url;
    }   
}

export {handleProductsListAdmin, addProduct};