import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

const render = (position, content) => {
    position.innerHTML = content();
};

const checkLogin = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    // console.log(user);
    // <img src="${user.avatar}" width="30" class="rounded-circle border border-secondary border-2 me-1">
    if (user) {
        return /*html*/`
        <ul class="dropdown-menu position-absolute shadow" style="top: 64px;">
            <li class="nav-item m-0">
                <a class="nav-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text me-1">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        <path d="M10 9H8" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                    </svg>
                    Profile
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link position-relative" href="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart me-1">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    Cart
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logOut">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out me-1">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" x2="9" y1="12" y2="12" />
                    </svg>
                    Log out
                </a>
            </li>
        </ul>
        `;
    }
    return /*html*/`
        <ul class="dropdown-menu position-absolute shadow border" style="top: 64px;">
            <li class="nav-item m-0"><a class="nav-link" href="/login">Log in</a></li>
            <li class="nav-item"><a class="nav-link" href="/register">Register</a></li>
        </ul>
    `;
}

export { router, render, checkLogin };