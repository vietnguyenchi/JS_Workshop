const LoginAdmin = function () {
    return /*html*/`
    <form class="mt-5 w-50 mx-auto border rounded p-5 shadow">
        <h1 class="mb-3 fw-medium">Login Admin</h1>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" placeholder="Your email..." />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Your password..." />
        </div>

        <div>
            <button type="button" id="btnSignIn" class="btn btn-info w-100 text-white fw-medium btn-submit">
                Log in
            </button>
        </div>
    </form>
    `;
};

export default LoginAdmin;