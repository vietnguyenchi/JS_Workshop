import HomePage from "./src/pages/Client/HomePage";
import LogIn from "./src/pages/Client/LogIn";
import handleLogin from "./src/handles/User/handleLogin";
import handleRegister from "./src/handles/User/handleRegister";
import ProductList from "./src/pages/Client/ProductList";
import Products from "./src/pages/Admin/Product";
import Register from "./src/pages/Client/Register";
import { render, router } from "./src/utilities";
import handleDashboard from "./src/handles/Admin/handleDashboard";
import setActive from "./src/components/setActive";
import Categories from "./src/pages/Admin/Category";
import { addCategory, delete_cat, handleCategories, renderCat } from "./src/handles/Admin/handleCategory";
import { addProduct, handleProductsListAdmin } from "./src/handles/Admin/handleProductAdmin";
import handleProductsList from "./src/handles/User/handleProductsList";
import ProductDetail from "./src/pages/Client/ProductDetail";
import handleProductDetail from "./src/handles/User/handleProductDetail";

const app = document.getElementById("app");
const user = JSON.parse(sessionStorage.getItem('user'));

// Client
router.on('/', () => render(app, HomePage));

router.on('/products', () => render(app, ProductList), {
    after() {
        handleProductsList();
    }
});

router.on('/product_detail/:id', () => render(app, ProductDetail), {
    after({data}) {
        handleProductDetail(data);
    }
})

router.on('/login', () => render(app, LogIn), {
    after() {
        const btnLogIn = document.getElementById('btnLogIn');
        console.log(btnLogIn);
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


// Admin
router.on("/admin", () => render(app, handleDashboard), {
    before(done) {
        if (user.role !== 'admin') {
            alert('You not allowed');
            router.navigate('/');
        }
        done();
    },
    after() {
        setActive();
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
        document.getElementById('add_category').addEventListener('submit', (e) => {
            // e.preventDefault();
            addCategory();
        })
    }
});

router.on('/admin/categories/delete_cat/:id', () => render(app, Categories), {
    after({ data }) {
        delete_cat(data.id);
        handleCategories();
    }
})

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