// activates the previous element (if it's first, go to last)
function goPrev() {
   if ($(':is(.images img, .nav i):first-child').hasClass('active')) {
      $(':is(.images img, .nav i).active').removeClass('active');
      $(':is(.images img, .nav i):last-child').addClass('active');
   } else {
      $(':is(.images img, .nav i).active').removeClass('active').prev().addClass('active');
   }
}

// activates the next element (if it's last, go to first)
function goNext() {
   if ($(':is(.images img, .nav i):last-child').hasClass('active')) {
      $(':is(.images img, .nav i).active').removeClass('active');
      $(':is(.images img, .nav i):first-child').addClass('active');
   } else {
      $(':is(.images img, .nav i).active').removeClass('active').next().addClass('active');
   }
}


// launching the script after everything is loaded
$(document).ready(function () {
   // creating as dots as the imgs are
   for (var i = 0; i < $('.images > img').length; i++) {
      $('<i/>', {
         'class': 'fas fa-circle' + (i === 0 ? ' active' : ''),
         'style': 'cursor: pointer'
      }).appendTo('.nav');
   }

   // adding some CSS to imgs
   $('.images img').css({
      'max-width': '90%',
      'max-height': '100%',
      'aspect-ratio': '16 / 9',
      'object-fit': 'cover'
   });

   // clicking on arrows, change the correct img
   $('.prev').click(goPrev);
   $('.next').click(goNext);

   // clicking on keyboard left/right arrows, change the correct img
   $(document).keydown(function (e) {
      if (e.keyCode === 37) goPrev();
      if (e.keyCode === 39) goNext();
   });

   // clicking on a dot, change the selected img and the dot
   $('.nav i.fa-circle').click(function () {
      var idx = $(this).index() + 1;
      $('.images img, .nav i.fa-circle').removeClass('active');
      $(':is(.images img, .nav i.fa-circle):nth-child('+idx+')').addClass('active');
   });
});