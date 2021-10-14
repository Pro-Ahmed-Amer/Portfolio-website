/* Start Scroll Top Button */
var scrollbtn = document.getElementById('scrollup');

window.onscroll = function() {
    if (window.pageYOffset >= 900) {
        scrollbtn.style.display = "block";
    } else {
        scrollbtn.style.display = "none";
    }
};

scrollbtn.onclick = function() {
    window.scrollTo(0, 0);
};
/* End Scroll Top Button */