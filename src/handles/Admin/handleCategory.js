import instance from "../../apis";
import { router } from "../../utilities";

const handleCategories = () => {
    const usersList = document.querySelector('#usersList');

    instance.get('/categories').then(({data}) => {
        const contentHTML = data.map((category, i) => {
            return /*html*/ `
                <tr>
                    <td class="text-center fw-medium">${i + 1}</td>
                    <td><p class="m-0 fw-medium">${category.name}</p></td>
                    <td>
                        <button class="btn btn-success btn-sm shadow-none" data-bs-toggle="modal" data-bs-target="#update_cat${category.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil">
                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                <path d="m15 5 4 4" />
                            </svg>
                        </button>
                        <a href="/admin/categories/delete_cat/${category.id}" class="btn btn-danger btn-sm shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2">
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                            </svg>
                        </a>
                        <div class="modal fade" id="update_cat${category.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <form id="add_category" autocomplete="off">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Update Category</h5>
                                        </div>
                                        <div class="modal-body">
                                            <label for="" class="form-label fw-bold">Name</label>
                                            <input id="name_cat" type="text" value ="${category.name}" class="form-control shadow-none" require>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary shadow-none"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit"
                                                class="btn custom-bg text-white shadow-none">UPDATE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </td>
                </tr>
            `
        }).join('');
        usersList.innerHTML = contentHTML;
    });
}

const addCategory = () => {
    const name_cat = document.querySelector('#name_cat').value.trim();

    const new_cat = {
        name: name_cat
    }

    // console.log(name_cat);
    instance.post('/categories', new_cat).then(() => router.navigate());
}

const delete_cat = (id) => {
    instance.delete('/categories/' + id).then(() => handleCategories());
}

const renderCat = function() {
    instance.get('/categories').then(({data}) => {
        document.querySelector('#cat_list').innerHTML = '<option></option>' + data.map(category => `<option value="${category.name}">${category.name}</option>`).join('');
    });
}

export { handleCategories, addCategory, delete_cat, renderCat};