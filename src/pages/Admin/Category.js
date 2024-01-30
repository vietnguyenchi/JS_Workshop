import headerAdmin from "../../components/HeaderAdmin";

const Categories = () => {
    return /*html*/ `
        ${headerAdmin()}
        <div class="container-fluid" id="main-content">
            <div class="row">
                <div class="col-lg-10 ms-auto p-4 overflow-hidden">
                    <h3 class="mb-3">CATEGORIES</h3>

                    <div class="card border-0 shadow-sm sm-4">
                        <div class="card-body">

                        <div class="text-end mb-4">
                            <button type="button" class="btn btn-dark shadow-none btn-sm" data-bs-toggle="modal"
                                data-bs-target="#add_cat">
                                + </i>Add
                            </button>
                        </div>

                        <!-- Modal -->
                        <div class="modal fade" id="add_cat" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <form id="add_category" autocomplete="off">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Add Category</h5>
                                        </div>
                                        <div class="modal-body">
                                            <label for="" class="form-label fw-bold">Name</label>
                                            <input id="name_cat" type="text" class="form-control shadow-none" require>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary shadow-none"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="submit"
                                                class="btn custom-bg text-white shadow-none">ADD</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>


                            <div class="table-responsive-md" style="height: 500px; overflow-y: scroll;">
                                <table class="table table-hover border table-bordered">
                                    <thead class="sticky-top">
                                        <tr>
                                            <th class="bg-dark text-white text-center" scope="col" width="5%">#</th>
                                            <th class="bg-dark text-white" scope="col">Name</th>
                                            <th class="bg-dark text-white" scope="col" width="20%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="usersList">
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
};

export default Categories;