/* Animation défiler vers le bas */
$(document).ready(function() {
    $('.cd-scroll').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
        return false;
    });

    /* Scroll to top */
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 600) {
            $('#btnScrollToTop').fadeIn();
        } else {
            $('#btnScorllToTop').fadeOut();
        }
    });

    const btnScrollToTop = document.querySelector("#btnScrollToTop");

    btnScrollToTop.addEventListener("click", function() {
        //window.scrollTo(0, 0);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});