;(function($, window, document, undefined) {
    'use strict';

    //sticky menu
    var header = $("header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });

    //hamburger menu
    function hamburger() {
        if ($( window ).width() < '758') {
            $( "nav" ).addClass('hamburger');
        } else {
            $( "nav" ).removeClass('hamburger');
        }
    };
    hamburger();
    $( window ).resize(function() {
        hamburger();
    });

    //hamburger menu open
    $( "header" ).on('click', '.hamburger-switch', function() {
        $( ".hamburger").toggleClass(function() {
            return "open";
        });
        $( ".hamburger-switch").toggleClass(function() {
            return "open";
        });
    });

    //hamburger menu close
    $( "body" ).on('click', 'main', function() {
        if ($('.hamburger').hasClass('open')) {
            $('.hamburger').removeClass('open');
            $( ".hamburger-switch").removeClass('open');
        }
    });

    //back_to_top
    $('body').append('<div id="back_to_top"><svg width="40" height="40" viewBox="0 0 48 48"><g class="nc-icon-wrapper" fill="#fff"><path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path></g></svg></div>');
    var back_to_top = $("#back_to_top");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            back_to_top.addClass("view");
        } else {
            back_to_top.removeClass("view");
        }
    });

    $( "body" ).on('click', '#back_to_top', function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    //Initialize homeSlider Swiper
    $(document).ready(function () {
        var swiper = new Swiper('#homeSlider .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            parallax: true,
            loop: true,
            grabCursor: true,
            pagination: {
                el: '#homeSlider .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#homeSlider .swiper-button-next',
                prevEl: '#homeSlider .swiper-button-prev',
            },
        });
    });

    //Initialize testimonials Swiper
    $(document).ready(function () {
        var swiper = new Swiper('#testimonials .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            parallax: true,
            loop: true,
            pagination: {
                el: '#testimonials .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '#testimonials .swiper-button-next',
                prevEl: '#testimonials .swiper-button-prev',
            },
        });
    });

    //Initialize parallax
    new Parallax('.parallax', {
      offsetYBounds: 50,
      intensity: 30,
      center: 0.3,
      safeHeight: 0.15
    }).init()

    //Preloader hide
    window.onload = function() {
        $('#preloader').css({opacity: "0", visibility: "hidden"});
        setTimeout(function(){
            $('#preloader').remove();
        }, 2000);
    };

    //Initialize  and set OnScreen
    var os = new OnScreen({
        tolerance: 0,
        debounce: 100,
        container: window
    });
    os.on('enter', '.onScreenAnimation', (element, event) => {
        element.classList.add('play');
    });

    //Ajax contactForm
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); //zakázanie defaultnej akcie tlačidla

        var form_name = $('input[name=name]').val();
        var form_email = $('input[name=email]').val();
        var form_message = $('textarea[name=message]').val();

        var ajaxContactForm = $.ajax({
            url: '../func/sendMail.php',
            type: 'post',
            data: {
                ajax: true,
                name: form_name,
                email: form_email,
                message: form_message,
            },
        }).done(function(html) {
            $('button[name=send]').text('SENDED');
            $('button[name=send]').toggleClass(function() {
                return "sended";
            });
            document.getElementById("contactForm").reset();
        });
        $( document ).ajaxStart(function() {
            $('button[name=send]').text('SENDING...');
        })
    });
    $('#contactForm').on('click', 'input, textarea', function() {
        if( $('button[name=send]').hasClass('sended')) {
            $('button[name=send]').text('SEND');
            $('button[name=send]').toggleClass(function() {
                return "sended";
            });
        }
    });

})(jQuery, window, document);
