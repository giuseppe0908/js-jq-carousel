//utilizzo la funzione .ready per essere sicuro di far eseguire il codice dopo il caricamento del DOM
$(document).ready(function(){
  carosel();
  generatepallini()
})

function carosel(){
  var frecciaSx = $('.prev > i.fa-angle-left');
  var frecciaDx = $('.next > i.fa-angle-right');
  var pallini = $('.nav i');


  pallini.click(function(){
    var dotsposition = pallini.index(this);
    var images = $('.images img');
    pallini.removeClass('active');
    $(this).addClass('active');
    images.removeClass('active');
    images.eq(dotsposition).addClass('active');

  })

  frecciaDx.click(function(e){
    next();
  })

  frecciaSx.click(function(e){
    prev();
  })

  $(document).Keyup(function (e){
    if(e.KeyCode == "39"){
      next();
    }
    if (e.KeyCode == "37") {
      prev();
    }
  })


}
function next(){
  var img = $('.active');
  var first = $(' .first');
  var cerchio =$('.nav i.active');
  var cerchiofirst = $('.nav .first');
  img.removeClass('active').next().addClass('active');

  if (img.hasClass('last')) {
    img.removeClass('active');
    first.addClass('active');
  }
}
function prev(){
  var img = $('.active');
  var last = $('.last');
  img.removeClass('active').prev().addClass('active');
   if (img.hasClass('first')) {
     img.removeClass('active');
     last.addClass('active');
   }
}
function generatepallini(){
  var nav = $('.slider-wrapper .nav');
  var raccolta = $('.slider-wrapper .iamges img').length;

  for (var i = 0; i < raccolta.length; i++) {
    if (i==0) {
    var dom =nav.html()+'<i class="fas fa-circle active first"></i>';
    }else if (i==raccolta-1) {
    var dom =nav.html()+'<i class="fas fa-circle active last"></i>';
    }else {
    var dom =nav.html()+'<i class="fas fa-circle"></i>';
    }
    nav.html(dom);
  }
}
