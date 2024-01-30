const headerAdmin = () => {
    return /*html*/ `
        <!-- Nav -->
        <div class="container-fluid bg-dark text-light p-3 d-flex align-items-center justify-content-between sticky-top z-3">
            <h3 class="mb-0 h-font text-light fw-bold opacity-100">FPOLY WEBSITE</h3>
            <a href="/" class="btn btn-light btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out me-1">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                LOG OUT
            </a>
        </div>

        <!-- Sidebar -->
        <div class="col-lg-2 bg-dark border-top border-3 border-secondary opacity-100" id="dashboard-menu">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid flex-lg-column align-items-stretch">
                    <h4 class="mt-2 ms-2 text-light">ADMIM PANEL</h4>
                    <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#adminDropdown" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse flex-column align-items-stretch mt-2 px-2"
                        id="adminDropdown">
                        <ul class="nav nav-pills flex-column">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/admin/users">Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/admin/categories">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="/admin/products">Products</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    `;
}

export default headerAdmin;