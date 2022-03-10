let headingClick = document.querySelector('.heading');

headingClick.addEventListener("click", function() {
    headingClick.classList.toggle('periwinkle');
    headingClick.children[0].classList.toggle('headingdown');
    headingClick.children[0].classList.toggle('headingup');

    var navbody = headingClick.nextElementSibling;

    if(navbody.style.maxHeight) {
        navbody.style.maxHeight = null;
    } else {
        navbody.style.maxHeight = navbody.scrollHeight + "px";
    }
});