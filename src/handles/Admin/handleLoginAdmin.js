import { router } from "../../utilities";
import instance from "../../apis";
import { validLogin } from "../../validations/auth.valid";

function handleLoginAdmin() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    if (validLogin(email, password)) {
        instance.post('/login', { email, password })
            .then(({ data }) => {
                if (data.user.role === 'admin') {
                    sessionStorage.setItem('user', JSON.stringify(data.user));
                    alert('Login successful');
                    location.reload();
                } else {
                    alert('You are not allowed to access this page');
                }
            })
            .catch(({ response }) => alert(response.data));

    }

}

export default handleLoginAdmin;