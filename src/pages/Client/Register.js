import Footer from "../../components/Footer";
import Header from "../../components/header";

const Register = () => {
    return /*html*/`
        ${Header()}
        <!-- Start Banner Area -->
        <section class="banner-area organic-breadcrumb">
            <div class="container">
                <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div class="col-first">
                        <h1>Login/Register</h1>
                        <nav class="d-flex align-items-center">
                            <a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
                            <a href="category.html">Login/Register</a>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Banner Area -->

        <!--================Login Box Area =================-->
        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <h3>Register</h3>
                            <form class="row login_form" action="contact_process.php" method="post" id="contactForm"
                                novalidate="novalidate">
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="username" name="name" placeholder="Username"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Username'">
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="email" class="form-control" id="email" name="name" placeholder="Email"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" class="form-control" id="password" name="name" placeholder="Password"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="password" class="form-control" id="cf_password" name="name" placeholder="Confirm password"
                                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
                                </div>
                                <div class="col-md-12 form-group mt-4">
                                    <button type="button" id="btnRegister" value="submit" class="primary-btn">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src="img/login.jpg" alt="">
                            <div class="hover">
                                <h4>New to our website?</h4>
                                <p>There are advances being made in science and technology everyday, and a good example of
                                    this is the</p>
                                <a class="primary-btn" href="/login">I already have an account</a>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </section>
        <!--================End Login Box Area =================-->
        ${Footer()}
    `
}

export default Register;