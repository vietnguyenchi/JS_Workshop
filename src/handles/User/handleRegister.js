import instance from "../../apis";
import { validRegister } from "../../validations/auth.valid";
import { router } from "../../utilities";

function handleRegister() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let cf_password = document.getElementById('cf_password').value.trim();

    let userInfo = {
        username,
        email,
        password,
        address: '',
        phone: '',
        cart: [],
        role: 'user'
    }

    if (validRegister({email, password, cf_password})) {
        instance.post('/register', userInfo)
            .then(({data}) => {
                sessionStorage.setItem('user', JSON.stringify(data.user));
                alert('User registration successful');
                router.navigate('/');
            })
            .catch(({response}) => alert(response.data));
    }
}

export default handleRegister;