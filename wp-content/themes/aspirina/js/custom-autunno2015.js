jQuery.noConflict();

(function($) {

  jQuery(document).ready(function() {
    var playb = false;
    var playbl = false;


   

    function play_video() {
      var id = $('.current').attr('id');
      var video = $('.current').find('.video-js');
      if (id === 'treni' || id === 'voglio-un-jet' ) {

        if (!playbl) {
          if (id === 'treni') {
            $('#treni video').click();
          }
          if (id === 'voglio-un-jet') {
            $('#voglio-un-jet video').click();
          }
         
          playbl = true;
        }
      } else {
        if (video.length === 0) {
          $('.vjs-playing').click();
         
          playbl = false;
        }
      }
    }

    function setup() {
      var epOldH = $(window).height();
      $('.video-js').css('height', epOldH);
      slideCount = $('#slider ul li').length;
    }


    $('.curtains').curtain({
      scrollSpeed: 3000,
      curtainLinks: '.curtain-links',
      nextSlide: function() {
        play_video();
        setup();
      },
      prevSlide: function() {
        play_video();
      },
      loadSetup: function() {
        setup();
      }
    });

  

   

      $(window).resize(function() {
        setup();
     
      });



  });

})(jQuery);