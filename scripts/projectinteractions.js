$(document).ready(function() {

    const scrollDivInitPos = $('#fw-block-start').offset().top;

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top - scrollDivInitPos;
        var elementBottom = elementTop + $(this).outerHeight();
        var elementMedium = elementTop + $(this).outerHeight()/2;

        var viewportTop = $(window).scrollTop() - scrollDivInitPos;
        var viewportBottom = viewportTop + $(window).height();
        var viewportMedium = viewportBottom / 2;

        if($(this).data('boxid') == 'fw-2') {
            console.log(viewportMedium, elementMedium)
        }

        var scrollPercentage = Math.abs(elementMedium - viewportMedium);

        return scrollPercentage;
    };


    $(window).on('resize scroll', function() {
        $('.fw-right').children().each( function() {
            var rightElem = $(this);

            $('.fw-center-inside').children().each( function() {

                if($(this).attr('id') == $(rightElem).data('boxid')) {

                    var elementpos = rightElem.isInViewport();
                    var opacity = (elementpos <= 100) ? ((100 - elementpos/2) / 100) : 0;

                    console.log(opacity);
                    
                    $(this).css('opacity', opacity);
                }
            } );
        });
    });
  });