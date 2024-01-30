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
        <ul class="dropdown-menu position-absolute" style="top: 64px;">
            <li class="nav-item m-0"><a class="nav-link" href="/login">Profile</a></li>
            <li class="nav-item"><a class="nav-link" href="/logOut">Log out</a></li>
            <li class="nav-item"><a class="nav-link" href="/admin">Admin</a></li>
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