jQuery(document).ready(function ($) {

    var $slider = $('.slideshow-title .slider'),
        maxItems = $('.item', $slider).length,
        dragging = false,
        tracking,
        rightTracking;

    $sliderRight = $('.slideshow-title').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

    rightItems = $('.item', $sliderRight).toArray();
    reverseItems = rightItems.reverse();
    $('.slider', $sliderRight).html('');
    for (i = 0; i < maxItems; i++) {
        $(reverseItems[i]).appendTo($('.slider', $sliderRight));
    }

    $slider.addClass('slideshow-left');
    $('.slideshow-left').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        
        autoplay: true,
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
            $('.slideshow-right .slider').slick('slickGoTo', -1);
            $('.slideshow-text').slick('slickGoTo', maxItems);
        } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
            $('.slideshow-right .slider').slick('slickGoTo', maxItems);
            $('.slideshow-text').slick('slickGoTo', -1);
        } else {
            $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
            $('.slideshow-text').slick('slickGoTo', nextSlide);
        }
    }).on("mousewheel", function (event) {
        event.preventDefault();
        if (event.deltaX > 0 || event.deltaY < 0) {
            $(this).slick('slickNext');
        } else if (event.deltaX < 0 || event.deltaY > 0) {
            $(this).slick('slickPrev');
        };
    }).on('mousedown touchstart', function () {
        dragging = true;
        tracking = $('.slick-track', $slider).css('transform');
        tracking = parseInt(tracking.split(',')[5]);
        rightTracking = $('.slideshow-right .slick-track').css('transform');
        rightTracking = parseInt(rightTracking.split(',')[5]);
    }).on('mousemove touchmove', function () {
        if (dragging) {
            newTracking = $('.slideshow-left .slick-track').css('transform');
            newTracking = parseInt(newTracking.split(',')[5]);
            diffTracking = newTracking - tracking;
            $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
        }
    }).on('mouseleave touchend mouseup', function () {
        dragging = false;
    });

    $('.slideshow-right .slider').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        initialSlide: maxItems - 1
    });
    $('.slideshow-text').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
    });
    $(function () {
        var liWidth = $("li").css("width");
        $("li").css("height", liWidth);
        $("li").css("lineHeight", liWidth);
        var totalHeight = $("#wordsearch").css("width");
        $("#wordsearch").css("height", totalHeight);
    });
    causeRepaintsOn = $("h1, h2, h3, p");
    $(window).resize(function () {
        causeRepaintsOn.css("z-index", 1);
    });
    $(window).on('resize', function () {
        var liWidth = $(".one").css("width");
        $("li").css("height", liWidth);
        $("li").css("lineHeight", liWidth);
        var totalHeight = $("#wordsearch").css("width");
        $("#wordsearch").css("height", totalHeight);
    });



    $(function () {
        /* 4 */
        $(this).delay(1500).queue(function () {
            $(".one").addClass("selected");
            $(this).dequeue();
        })
        /* 0 */
        .delay(500).queue(function () {
            $(".two").addClass("selected");
            $(this).dequeue();
        })
        /* 4 */
        .delay(500).queue(function () {
            $(".three").addClass("selected");
            $(this).dequeue();
        })
        /* P */
        .delay(500).queue(function () {
            $(".four").addClass("selected");
            $(this).dequeue();
        })
        /* A */
        .delay(500).queue(function () {
            $(".five").addClass("selected");
            $(this).dequeue();
        })
        /* G */
        .delay(500).queue(function () {
            $(".six").addClass("selected");
            $(this).dequeue();
        })
        /* E */
        .delay(500).queue(function () {
            $(".seven").addClass("selected");
            $(this).dequeue();
        })
        /* N */
        .delay(500).queue(function () {
            $(".eight").addClass("selected");
            $(this).dequeue();
        })
        /* O */
        .delay(500).queue(function () {
            $(".nine").addClass("selected");
            $(this).dequeue();
        })
        /* T */
        .delay(500).queue(function () {
            $(".ten").addClass("selected");
            $(this).dequeue();
        })
        /* F */
        .delay(500).queue(function () {
            $(".eleven").addClass("selected");
            $(this).dequeue();
        })
        /* O */
        .delay(500).queue(function () {
            $(".twelve").addClass("selected");
            $(this).dequeue();
        })
        /* U */
        .delay(500).queue(function () {
            $(".thirteen").addClass("selected");
            $(this).dequeue();
        })
    /* N */
    .delay(500).queue(function () {
        $(".fourteen").addClass("selected");
        $(this).dequeue();
    })
    /* D */
    .delay(500).queue(function () {
        $(".fifteen").addClass("selected");
        $(this).dequeue()
    });
});
});

