$(document).ready(function() {
    $('.f-btn-dk').click(function() {
        $('body,html').animate({ scrollTop: $('#formRegister').offset().top }, 1000)
        $('#autoFocus').focus();
    });
    $('.btn-dk').click(function() {
        $('body,html').animate({ scrollTop: $('#formRegister').offset().top }, 1000)
        $('#autoFocus').focus();
    });

    $('.s-sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.btn_prev-banner'),
        nextArrow: $('.btn_next-banner'),
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    var widthWidow = $(window).width();
    if (widthWidow > 767) {
        $('.s-slider-smt').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            prevArrow: $('.btn_prev-cmt'),
            nextArrow: $('.btn_next-cmt'),
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 913,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    }

    // -------Time footer
    var countDownDate = new Date("2022-08-01, 00:00:00").getTime();
    var time = setInterval(function() {
        var now = new Date().getTime();
        var gap = countDownDate - now;
        var secondF = 1000;
        var minuteF = secondF * 60;
        var housF = minuteF * 60;
        var dayF = housF * 24;
        var d = Math.floor(gap / (dayF));
        var h = Math.floor((gap % (dayF)) / (housF));
        var m = Math.floor((gap % (housF)) / (minuteF));
        var s = Math.floor((gap % (minuteF)) / (secondF));

        $("#f-day").html(d);
        $("#f-hours").html(h);
        $("#f-minutes").html(m);
        $("#f-seconds").html(s);
        if (gap < 0) {
            clearInterval(time);
            $("#f-day").html("00");
            $("#f-hours").html("00");
            $("#f-minutes").html("00");
            $("#f-seconds").html("00");
        }
    }, 1000);
    // ---------Time top
    var myTimer;

    function clock() {
        myTimer = setInterval(myClock, 1000);
        var c = 5919; //Initially set to 1:38:39


        function myClock() {
            --c
            var seconds = c % 60; // Seconds that cannot be written in minutes
            var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
            var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
            var hours = (secondsInMinutes - minutes) / 60;
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            // Now in hours, minutes and seconds, you have the time you need.
            // console.clear();
            // console.log(hours + ":" + minutes + ":" + seconds)
            $(".s-day").html("00");
            $(".s-hours").html(hours);
            $(".s-minutes").html(minutes);
            $(".s-seconds").html(seconds);
            if (c == 0) {
                clearInterval(myTimer);
                $(".s-day").html("00");
                $(".s-hours").html("00");
                $(".s-minutes").html("00");
                $(".s-seconds").html("00");
            }
        }
    }

    clock();


});
//-------Scroll
$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    var heightForm = $('.s-form').innerHeight();
    var heightFBottom = $('.footer-bottom').innerHeight();
    if (scrollPos > (heightForm * 1.5)) {
        $(".footer-bottom").addClass("f-fixed");
    } else {
        $(".footer-bottom").removeClass("f-fixed");
    }
    var widthMobile = $(window).innerWidth();
    if (widthMobile <= 540) {
        $('.footer-top').addClass('addStyleMB');
        $('.footer-top.addStyleMB').css('margin-bottom', heightFBottom + 'px');
    } else {
        $('.footer-top.addStyleMB').css('margin-bottom', '0px');

    }
});
$(document).ready(function() {

    $('.detailPolicy').click(function() {
        detailPolicy(this);
    });

});
//======================
function detailPolicy(sender) {
    //console.log(sender);
    let link = $(sender).attr("data-url");
    const URL = $("#base_url").val();
    let name = $(sender).attr("data-name");
    let height = $(window).height() - 50;
    $(".config_common").modal('show');
    $("#myLargeModalLabel").html(name);
    $("#contents").height(height);
    $.ajax({
        url: URL + 'home/getPolicy',
        type: 'POST',
        data: { link: link },
        success: function(result) {
            $("#contents").html(result);
        }
    })
}
//var ngayKetThuc = $("#ngayKetThuc").attr("data-date");
//console.log(countDownDate);
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"


    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }
    //    $("#day").html(days + "<span>d</span>");
    $("#f-day").html(days);
    $("#f-hours").html(hours);
    $("#f-minutes").html(minutes);
    $("#f-seconds").html(seconds);
    //$(".boxDealLeft_title_time").removeClass("hidden");
    //alert(html);

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);

        //document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);