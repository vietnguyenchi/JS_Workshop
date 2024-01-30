import { router } from "../../utilities";
import instance from "../../apis";
import { validLogin } from "../../validations/auth.valid";

function handleLogin() {
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    
    if (validLogin(email, password)) {
        instance.post('/login', {email, password})
        .then(({data}) => {
            sessionStorage.setItem('user', JSON.stringify(data.user));
            alert('Login successful');
            router.navigate('/');
        })
        .catch(() => alert('Login failed'));

    }
    
}

export default handleLogin;