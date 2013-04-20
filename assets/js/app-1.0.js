;(function($){

    function positionPitch()
    {
        var win = $(window);
        var pitch = $('#pitch');
        if (win.width() <=767) {
            // position top, relative
            pitch.css({
                'position'	: 'relative',
                'height'	: 350,
                'width'		: '100%',
                'max-width'	: 'none'
            });
        } else {
            // position left, fixed
            pitch.css({
                'position'	: 'fixed',
                'height'	: '100%',
                'width'		: '30%',
                'max-width'	: 320
            });
        }
    }

    positionPitch();

    window.onresize = positionPitch;

})(Zepto)
