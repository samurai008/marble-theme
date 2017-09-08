var menuToggler = document.getElementById('menu-toggler');
var backDrop = document.getElementById('backdrop');

function setBackDrop(prop) {
    backDrop.style.cssText = "display: " +  prop;
}

setBackDrop('none');

menuToggler.addEventListener('click', function() {
    if (backDrop.style.display == 'none')
        setBackDrop('block');
    else
        setBackDrop('none');
})

backDrop.addEventListener('click', function() {
    menuToggler.click();
    setBackDrop('none');
})

var artCarousel = $('#article-carousel');
console.log(artCarousel.carousel('pause'));