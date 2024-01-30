function validRegister(data) {
    if (data.username === '' || data.email === '' || data.password === '' || data.cf_password === '') {
        alert('Cannot be empty');
        return false;
    }

    if (data.password.length < 6) {
        alert('Password must be at least 6 characters')
        return false;
    }

    if (data.password !== data.cf_password) {
        alert('Confirm password not correct');
        return false;
    }

    return true;
}

function validLogin(email, password) {
    if (email === '' || password === '') {
        alert('Cannot be empty');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return false;
    }

    return true;
}

export { validRegister, validLogin };