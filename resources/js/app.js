const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const overlayY = document.querySelector('.first_div');

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    // navLinks.classList.remove("remonve");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    overlayY.classList.toggle('adding_div')
        //Hamburger Animation
    hamburger.classList.toggle("toggle");
});


// Header Type = Fixed
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // var box = $('.nav_bg_adder').height();
    // var header = $('nav').height();

    if (scroll > 20) {
        $("header").addClass("nav_bg_adder");
    } else {
        $("header").removeClass("nav_bg_adder");
    }
});



///maib-banner moon parallax
function parallax(element, distance, speed) {
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
    item.style.transition = '2.5s ease all';

};

window.addEventListener('scroll', function() {
    parallax('.star-img', window.scrollY, 0.3);
    parallax('.star-two', window.scrollY, 0.2);
    parallax('.star-three', window.scrollY, 0.1);
    parallax('.five_', window.scrollY, 0.4);
    parallax('.six_', window.scrollY, 0.5);
    parallax('.seven_', window.scrollY, 0.4);
    parallax('.eight', window.scrollY, 0.4);
    parallax('.nine_', window.scrollY, 0.4);
    parallax('.ten', window.scrollY, 0.2);
    parallax('.scroll_down_img', window.scrollY, 0.1);
    parallax('.scroll_text', window.scrollY, 0.1);


});



// //why cydog slider 
// $(document).ready(function () {

// 	$('.items').slick({
// 		dots: true,
// 		infinite: true,
// 		speed: 2000,
// 		autoplay: true,
// 		autoplaySpeed: 3000,
// 		slidesToShow: 3,
// 		slidesToScroll: 3,
// 		responsive: [{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 2,
// 					slidesToScroll: 2,
// 					infinite: true,
// 					dots: true
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			},
// 			{
// 				breakpoint: 550,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1
// 				}
// 			}

// 		]
// 	});
// });


/*
Random link button- By JavaScript Kit (http://javascriptkit.com)
Over 300+ free scripts!
This credit MUST stay intact for use
*/

// var randomlinks = new Array()

// randomlinks[0] = "https://duckduckgo.com/?q="
// randomlinks[1] = "https://search.brave.com/search?q="
// randomlinks[2] = "https://dogpile.com/serp?q="
// randomlinks[3] = "https://google.com/search?q="
// randomlinks[4] = "https://search.yahoo.com/search?p="
// randomlinks[5] = "https://bing.com/search?q="
// randomlinks[6] = "https://www.ecosia.org/search?q="
// randomlinks[7] = "https://www.startpage.com/do/dsearch?query="

// function randomlink(link) {
// 	window.location = randomlinks[Math.floor(Math.random() * randomlinks.length)] + link;
// }

// function qurySearch() {
// 	const query = window.location.search
// 	if (query && query.includes("?q=")) {
// 		const paramList = query.split("?q=");
// 		if (paramList[paramList.length - 1] !== "")
// 			randomlink(paramList[paramList.length - 1])
// 	}
// }


// //search bar js
// $('input').focusin(function () {
// 	$('.loading').css('display', 'block');
// });
// $('input').focusout(function () {
// 	$('.loading').css('display', 'none');
// });


//countUp
(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

jQuery(function($) {
    // custom formatting example
    $('.count-number').data('countToOptions', {
        formatter: function(value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.timer').each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }
});


