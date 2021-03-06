
function main() {
    /* ==============================================
     Testimonial Slider
     =============================================== */

    $('a.page-scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var hash = this.hash;
            var hashIndex = hash.indexOf('#');
            if (hash[hashIndex + 1] == '/') {
                hash = hash.replace('/', '');
                var newIndex = hash.indexOf('/');
                if (newIndex == -1) {
                    newIndex = hash.length
                }
                hash = hash.slice(0, newIndex);
            }
            var target = $(hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 900);
                //return true;
            }
        }
    });

    $("#teachers").css('min-height', $(window).height() + "px");

    // will first fade out the loading animation 
    $("#status").fadeOut("slow");

    // will fade out the whole DIV that covers the website. 
    $("#preloader").delay(500).fadeOut("slow").remove();

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function () {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    })

    $("#team").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        itemsCustom: [
                      [0, 1],
                      [450, 2],
                      [600, 2],
                      [700, 2],
                      [1000, 4],
                      [1200, 4],
                      [1400, 4],
                      [1600, 4]
        ],
    });

    $("#clients").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        autoHeight: true,
        itemsCustom: [
                      [0, 1],
                      [450, 2],
                      [600, 2],
                      [700, 2],
                      [1000, 4],
                      [1200, 5],
                      [1400, 5],
                      [1600, 5]
        ],
    });

    $("#testimonial").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    var $container = $('.portfolio-items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });



    /*====================================
    WOW JS
    ======================================*/

    new WOW().init();
    //smoothScroll
    //smoothScroll.init();

}
//main();

function goToContent() {alert(5);
    var hash = window.location.hash;
    var hashIndex = hash.indexOf('#');
    if (hash[hashIndex + 1] == '/') {
        hash = hash.replace('/', '');
        var newIndex = hash.indexOf('/');
        if (newIndex == -1) {
            newIndex = hash.length
        }
        hash = hash.slice(0, newIndex);
    }
    var target = $(hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top - 40
        }, 900);
    }
}