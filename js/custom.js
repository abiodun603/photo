$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        auto: true,
        pager:false,
        controls: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });
    
    $('#portWidth').lightSlider({
      autoWidth:true,
      loop:false,
      auto: false,
      pager:false,
      controls: false,
      onSliderLoad: function() {
          $('#portWidth').removeClass('cs-hidden');
      } 
    });  

    $(window).scroll(function(){
      if(this.scrollY > 150)
        $(".navbar-page").addClass("sticky");
      else
        $(".navbar-page").removeClass("sticky");
    });

    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  });