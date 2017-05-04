$(document).ready(function() {

    //###############------ HOME --------######################

    // header slider

    var count = 0;
    var images = ['img/topslider/background-01.jpg', 'img/topslider/background-02.jpg', 'img/topslider/background-03.jpg'];

    var sliderText = ["'HIGH QUALITY MEDICAL CARE THAT'S FAST AND CONVENIENT'", "AFFORDABLE PEDIATRIC DENTISTRY SERVICES", "WE ARE A TEAM OF QUALIFIED DENTISTS AND NURSES"];
    var sliderText2 = ["Our entire team is dedicated to providing you with the highest standard of quality dental care services that are tailored to meet the specific needs of every member of your family.", "We understand how important it is for your child to have healthy teeth. That’s why our range of services also includes various children’s dentistry services from checkups to restorative care.", "Denta-C pursues the goal of caring about the health of your teeth, and we have gathered a qualified team of experts, who are dedicated to the needs of your and your family’s dental care."];


    var img = $('.top-slider');
    img.css('background-image', 'url(' + images[count] + ')');


    $('.dot').click(function() {
        var x = $(this).index();
        img.css('background-image', 'url(' + images[x] + ')');

        $(".top-slider h1").text(sliderText[x]);
        $(".top-slider p").text(sliderText2[x]);

        $(".dot").removeClass("dot-active");
        $(this).addClass("dot-active");
    });


    // TESTIMONIALS text slider

    $(".owl-testimonials-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    // team slider


    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });


    // scroll top start
    (function() {
        var link,
            toggleScrollToTop = function() {
                if ($('body').scrollTop() > 0 || $('html').scrollTop() > 0) {
                    link.fadeIn(400);
                } else {
                    link.fadeOut(400);
                }
            }
        $(document).ready(function() {
            link = $('.scroll-top');
            $(window).scroll(toggleScrollToTop);

            toggleScrollToTop();
        });
    })();
    // scroll top end


    //  home nav menu


    $('.sidebar').click(function() {
        $('.sidebar-menu').toggleClass('visible');
        $(this).css('display', 'none');
        $('.circle').css('display', 'block');
    });
    $('.circle').click(function() {
        $('.sidebar-menu').toggleClass('visible');
        $(this).css('display', 'none');
        $('.sidebar').css('display', 'block');
    });



    $('.sidebar-menu .fa-angle-down').click(function() {
        $(".scrollmenu").css('display', 'block');
        $('.sidebar-menu .fa-angle-up').css('display', 'block');
        $('.fa-angle-down').css('display', 'none');
    });

    $('.sidebar-menu .fa-angle-up').click(function() {
        $(".scrollmenu").css('display', 'none');
        $('.sidebar-menu .fa-angle-down').css('display', 'block');
        $('.fa-angle-up').css('display', 'none');
    });


    //  home nav end

// ------######################### section9 google map #############################-------------------

    $('.map-container')
	.click(function(){
			$(this).find('iframe').addClass('clicked')})
	.mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')});

    
    
    // ------######################### TYPOGRAPHY #############################-------------------

    // pages hover


    $('.menu').find("li").eq(3).mouseenter(function() {
        $('.dropdown-content').css({
            'display': 'block',
            'position': 'realtive',
            'z-index': '10'
        });
    });
    $('.pages-hover').mouseleave(function() {
        $('.dropdown-content').css({
            'display': 'none'
        });
    });


    //search---- 

    $('.menu .fa-search').click(function() {
        $('#ftext').css('display', 'block');
        $('.menu .fa-times').css('display', 'block')
        $('.fa-search').css('display', 'none')
    })

    $('.menu .fa-times').click(function() {
        $('#ftext').css('display', 'none');
        $('.menu .fa-times').css('display', 'none')
        $('.fa-search').css('display', 'block')
    })


    // menu fixed

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 150) {
            $('.nav-menu').addClass('fixed');
        } else {
            $('.nav-menu').removeClass('fixed');
        }
    });




    // ------######################### tab & accordion #############################-------------------
    $(function() {
        $(".expand").on("click", function() {
            $(this).next().slideToggle(200);
            $expand = $(this).find(">:first-child");

            if ($expand.text() == "+") {
                $expand.text("-");
            } else {
                $expand.text("+");
            }
        });
    });

    // ------######################### progres bar #############################-------------------

    // COUNTERS

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

    // SKILL BARS

    $('.skill-bar-count').counterUp({
        delay: 10,
        time: 2000
    });

    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    );

    // circle progress 

    $(".circle-progress-bar").loading();


    // ------######################### calendar #############################-------------------


});

$(document).ready(function() {
    /*
    	date store today date.
    	d store today date.
    	m store current month.
    	y store current year.
    */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /*
    	Initialize fullCalendar and store into variable.
    	Why in variable?
    	Because doing so we can use it inside other function.
    	In order to modify its option later.
    */

    var calendar = $('#calendar').fullCalendar({
        /*
        	header option will define our calendar header.
        	left define what will be at left position in calendar
        	center define what will be at center position in calendar
        	right define what will be at right position in calendar
        */
        header: {
            // left: 'prev,next today',
            left: 'prev,next',
            center: 'title',
            right: ''
        },
        /*
        	defaultView option used to define which view to show by default,
        	for example we have used agendaWeek.
        */
        defaultView: 'month',
        /*
        	selectable:true will enable user to select datetime slot
        	selectHelper will add helpers for selectable.
        */
        selectable: true,
        selectHelper: true,
        /*
        	when user select timeslot this option code will execute.
        	It has three arguments. Start,end and allDay.
        	Start means starting time of event.
        	End means ending time of event.
        	allDay means if events is for entire day or not.
        */
        select: function(start, end, allDay) {
            /*
            	after selection user will be promted for enter title for event.
            */
            var title = prompt('Event Title:');
            /*
            	if title is enterd calendar will add title and event into fullCalendar.
            */
            if (title) {
                calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
            }
            calendar.fullCalendar('unselect');
        },
        /*
        	editable: true allow user to edit events.
        */
        editable: true,
        /*
        	events is the main option for calendar.
        	for demo we have added predefined events in json object.
        */
        events: [{
                title: 'All Day Event',
                start: new Date(y, m, 1)
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2)
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d - 3, 16, 0),
                allDay: false
            },
            {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/'
            }
        ]
    });

});