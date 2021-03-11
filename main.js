//utilizzo la funzione .ready per essere sicuro di far eseguire il codice dopo il caricamento del DOM
$(document).ready(function(){
  carosel();
})

function carosel(){
  var frecciaSx = $('.prev > i.fa-angle-left');
  var frecciaDx = $('.next > i.fa-angle-right');
  var raccoltaimg = $('.images');
  var imag = $('.images img')


  frecciaDx.click(function(){
      var img = $('.images .active');

      var first = $('.images > .first');
      img.removeClass('active').next().addClass('active');

      if (img.hasClass('last')) {
        img.removeClass('active');
        first.addClass('active');
      }

  })

  frecciaSx.click(function(){
    var img = $('.images  > .active');
    var last = $('.images .last');
    img.removeClass('active').prev().addClass('active');
     if (img.hasClass('first')) {
       img.removeClass('active');
       last.addClass('active');
     }
  })
}
