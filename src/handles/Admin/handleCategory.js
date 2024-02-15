import instance from "../../apis";

const handleCategories = async function (){
    const usersList = document.querySelector('#usersList');

    await instance.get('/categories').then(({data}) => {
        const contentHTML = data.map((category, i) => {
            return /*html*/ `
                <tr>
                    <td class="text-center fw-medium">${i + 1}</td>
                    <td><p class="m-0 fw-medium">${category.name}</p></td>
                    <td>
                        <button data-id-cat="${category.id}" class="btn btn-success btn-sm shadow-none btn-edit" data-bs-toggle="modal" data-bs-target="#update_cat">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                            </svg>
                        </button>
                        <button data-id-cat="${category.id}" class="btn btn-danger btn-sm shadow-none btn-delete">
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
        usersList.innerHTML = contentHTML;
    });

    const add_category = document.getElementById('add_category');
    add_category.addEventListener('submit', addCategory);

    const btns_delete = document.querySelectorAll('.btn-delete');
    const btns_edit = document.querySelectorAll('.btn-edit');
    for (const btn of btns_delete) {
        const id = btn.getAttribute('data-id-cat');
        btn.addEventListener('click', () => delete_cat(id));
    }
    for (const btn of btns_edit) {
        const id = btn.getAttribute('data-id-cat');
        btn.addEventListener('click', () => setDataUpdate(id));
    }

    const btn_update = document.getElementById('btn_update');
    btn_update.addEventListener('click', (e) => {
        e.preventDefault();
        const id_cat = btn_update.getAttribute('data-id-cat');
        updateCat(id_cat);
    });

}

const addCategory = async function () {
    const name_cat = document.querySelector('#name_cat').value.trim();

    const new_cat = {
        name: name_cat
    }

    await instance.post('/categories', new_cat);
    alert('Add category successfully');
    handleCategories();
}

const delete_cat = async function (id) {
    console.log(id);
    if (confirm("Are you sure you want to delete")) {
        await instance.delete('/categories/' + id);
        alert("Delete category successfully");
        handleCategories();
    }
}

const setDataUpdate = async function (id) {
    const {data} = await instance.get(`/categories/${id}`);
    document.getElementById('name_update').value = data.name;
    document.getElementById('btn_update').setAttribute('data-id-cat', data.id);
}

const updateCat = async function (id) {
    const name_update = document.getElementById('name_update').value;
    const cat_update = {name: name_update};
    await instance.patch(`/categories/${id}`, cat_update);
    alert("Update category successfully");
    location.reload();
}

const renderCat = function() {
    instance.get('/categories').then(({data}) => {
        const catLists = document.getElementsByClassName('cat_list');
        for (let list of catLists) {
            list.innerHTML = '<option></option>' + data.map(category => `<option value="${category.name}">${category.name}</option>`).join('');
        }
    });
}

export { handleCategories, addCategory, delete_cat, renderCat};