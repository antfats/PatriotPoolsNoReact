$('document').ready(function () {

    $(".sidebar").sidebar('show');







    window.onscroll = function () { stickyNav() };

    var navbar = $("#menu");
    var sticky = navbar.offsetTop;


    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
});