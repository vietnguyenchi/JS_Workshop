import headerAdmin from "../../components/HeaderAdmin";

const Products = () => {
    return /*html*/`
    ${headerAdmin()}
    <div class="container-fluid" id="main-content">
        <div class="row">
            <div class="col-lg-10 ms-auto p-4 overflow-hidden">
                <h3 class="fw-medium">Products</h3>

                <div class="card border-0 shadow-sm sm-4">
                    <div class="card-body">

                        <div class="text-end mb-4">
                            <button type="button" class="btn btn-dark shadow-none btn-sm" data-bs-toggle="modal"
                                data-bs-target="#add_product">
                                + </i>Add
                            </button>
                        </div>

                        <!-- Add product -->
                        <div class="modal fade" id="add_product" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <form id="add_product_form" autocomplete="off">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Add Product</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Title</label>
                                                    <input type="text" id="title" class="form-control shadow-none" required>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Price</label>
                                                    <input type="number" id="price" min="1" class="form-control shadow-none"
                                                        required>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Quantity</label>
                                                    <input type="text" id="quantity" min="1" class="form-control shadow-none" required>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Discount(%)</label>
                                                    <input type="text" id="discount" min="1" class="form-control shadow-none" required>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Category</label>
                                                    <select class="form-select cat_list" required>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="formFile" class="form-label fw-bold">Brand</label>
                                                    <input class="form-control" id="brand" type="text">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="formFile" class="form-label fw-bold">Image</label>
                                                    <input class="form-control" type="file" id="formFile">
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <label for="" class="form-label fw-bold">Description</label>
                                                    <textarea rows="4" id="description" class="form-control shadow-none"
                                                        required></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary shadow-none"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit"
                                                class="btn custom-bg text-white shadow-none">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Update product -->
                        <div class="modal fade" id="update_product" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <form id="update_product_form" autocomplete="off">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Add Product</h5>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Title</label>
                                                    <input id="title_update" type="text" class="form-control shadow-none" require>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Price</label>
                                                    <input id="price_update" type="number" min="1" class="form-control shadow-none"
                                                        require>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Quantity</label>
                                                    <input id="quantity_update" type="text" min="1" class="form-control shadow-none" require>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Discount(%)</label>
                                                    <input id="discount_update" type="text" min="1" class="form-control shadow-none" require>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Brand</label>
                                                    <input id="brand_update" type="text" min="1" class="form-control shadow-none" require>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="" class="form-label fw-bold">Category</label>
                                                    <select id="cat_update" class="form-select cat_list" required>
                                                    </select>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="formFile" class="form-label">Image</label>
                                                    <input id="img_update" class="form-control" type="file" id="formFile">
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <img id="img_current" width="100">
                                                </div>
                                                <div class="col-12 mb-3">
                                                    <label for="" class="form-label fw-bold">Description</label>
                                                    <textarea rows="4" id="desc_update" class="form-control shadow-none"
                                                        require></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary shadow-none"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit" id="btn_update"
                                                class="btn custom-bg text-white shadow-none">UPDATE</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <!-- Table -->
                        <div class="table-responsive-lg" style="height: 450px; overflow-y: scroll;">
                            <table class="table table-hover border table-bordered">
                                <thead class="sticky-top">
                                    <tr>
                                        <th class="bg-dark text-white text-center" scope="col" width="5%">#</th>
                                        <th class="bg-dark text-white" scope="col" width="30%">Title</th>
                                        <th class="bg-dark text-white" scope="col">Price</th>
                                        <th class="bg-dark text-white" scope="col">Image</th>
                                        <th class="bg-dark text-white" scope="col">Brand</th>
                                        <th class="bg-dark text-white" scope="col">Category</th>
                                        <th class="bg-dark text-white" scope="col">Discount(%)</th>
                                        <th class="bg-dark text-white" scope="col">Quantity</th>
                                        <th class="bg-dark text-white" scope="col" width="15%">Action</th>
                                    </tr>
                                </thead>
                                <tbody id = "productsList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
};

export default Products;