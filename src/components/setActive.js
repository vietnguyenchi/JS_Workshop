const setActive = () => {
    let navbar = document.getElementById("dashboard-menu");
    let a_tags = navbar.querySelectorAll("a");
    let link = document.location.href.split('/').pop();

    for (let i = 0; i < a_tags.length; i++) {
        let file = a_tags[i].href.split('/').pop();
        if (file === link) {
            a_tags[i].classList.add('active');
        }
    }
}

export default setActive;