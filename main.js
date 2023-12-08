document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");
    var lastScrollPosition = window.scrollY || window.pageYOffset;

    window.addEventListener("scroll", function () {
        var currentScrollPosition = window.scrollY || window.pageYOffset;

        if (currentScrollPosition > lastScrollPosition) {
            header.style.backgroundAttachment = "scroll";
        } else {
            header.style.backgroundAttachment = "fixed";
        }

        lastScrollPosition = currentScrollPosition;
    });
});

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function openTab(tabname) {
    for (tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}