// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  // $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
  //   // $('#js-body').toggleClass('no-scroll');
  //   $('#js-menu, #js-menu-screen').toggleClass('is-visible');
  //   $('#js-menu-trigger').toggleClass('slide close');
  //   // $('#masthead, #page-wrapper').toggleClass('slide');
  //   e.preventDefault();
  // });

   Gifffer({
     playButtonStyles: {
       'width': '60px',
       'height': '60px',
       'border-radius': '30px',
       'background': 'rgba(0, 0, 0, 0.3)',
       'position': 'absolute',
       'top': '50%',
       'left': '50%',
       'margin': '-30px 0 0 -30px'
     },
     playButtonIconStyles: {
       'width': '0',
       'height': '0',
       'border-top': '14px solid transparent',
       'border-bottom': '14px solid transparent',
       'border-left': '14px solid rgba(255, 255, 255, 0.5)',
       'position': 'absolute',
       'left': '26px',
       'top': '16px'
     }
   });
});

// // FitVids
// $(document).ready(function(){
// 	// Target your .container, .wrapper, .post, etc.
// 	$("#main").fitVids();
// });
//
// // Table of Contents title. Change text to localize
// $("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");
