import HomePage from "./src/pages/Client/HomePage";
import LogIn from "./src/pages/Client/LogIn";
import handleLogin from "./src/handles/User/handleLogin";
import handleRegister from "./src/handles/User/handleRegister";
import ProductList from "./src/pages/Client/ProductList";
import Products from "./src/pages/Admin/Product";
import Register from "./src/pages/Client/Register";
import { render, router } from "./src/utilities";
import setActive from "./src/components/setActive";
import Categories from "./src/pages/Admin/Category";
import { handleCategories, renderCat } from "./src/handles/Admin/handleCategory";
import { addProduct, handleProductsListAdmin } from "./src/handles/Admin/handleProductAdmin";
import handleProductsList from "./src/handles/User/handleProductsList";
import ProductDetail from "./src/pages/Client/ProductDetail";
import handleProductDetail from "./src/handles/User/handleProductDetail";
import Cart from "./src/pages/Client/Cart";
import handleCart from "./src/handles/User/handleCart";
import DashBoard from "./src/pages/Admin/Dashboard";
import LoginAdmin from "./src/pages/Admin/LoginAdmin";
import handleLoginAdmin from "./src/handles/Admin/handleLoginAdmin";

const app = document.getElementById("app");
const user = JSON.parse(sessionStorage.getItem('user'));

// Client
router.on('/', () => render(app, HomePage));

router.on('/products', () => render(app, ProductList), {
    after() {
        handleProductsList();
    }
});

router.on('/products/:id', () => render(app, ProductDetail), {
    after({ data }) {
        handleProductDetail(data);
    }
});

router.on('/cart', () => render(app, Cart), {
    after() {
        handleCart();
    }
});

router.on('/login', () => render(app, LogIn), {
    after() {
        const btnLogIn = document.getElementById('btnLogIn');
        btnLogIn.addEventListener('click', handleLogin);
    }
});

router.on('/register', () => render(app, Register), {
    after() {
        const btnRegister = document.getElementById('btnRegister');
        btnRegister.addEventListener('click', handleRegister);
    }
});

router.on('/logOut', () => {
    sessionStorage.removeItem('user');
    location.reload();
});

// console.log(user)

// Admin
router.on("/admin", () => render(app, DashBoard), {
    before(done) {
        if (!user || user.role !== 'admin') {
            router.navigate('/loginAdmin');
        }
        done();
    },
    after() {
        setActive();
    }
});

router.on("/loginAdmin", () => render(app, LoginAdmin), {
    before(done) {
        if (user) router.navigate('/admin');
        done();
    },
    after() {
        const btnLoginAdmin = document.getElementById('btnSignIn');
        btnLoginAdmin.addEventListener('click', handleLoginAdmin);
    }
});

router.on('/admin/categories', () => render(app, Categories), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
        setActive();
    },
    after() {
        handleCategories();
    }
});

router.on('/admin/products', () => render(app, Products), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
        setActive();
    },
    after() {
        handleProductsListAdmin();
        renderCat();
        addProduct();
    }
})

router.resolve();