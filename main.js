//utilizzo la funzione .ready per essere sicuro di far eseguire il codice dopo il caricamento del DOM
$(document).ready(function(){
  carosel();
})

function carosel(){
  var frecciaSx = $('.prev > i.fa-angle-left');
  var frecciaDx = $('.next > i.fa-angle-right');

   var pallini = $('.nav i');
   var figura = $('.images img');
   for (var i = 0; i < figura.length; i++) {
        figura[i].setAttribute('id',i);
        pallini[i].setAttribute('id',i);
   }

  pallini.click(function(){
    var id = this.getAttribute('id');
    var imagine = $('img#' + id);
    var imaginevecchia=$('img.active');

    var pallino = pallini[id];
    var pallinovecchio = $('i.active');
    pallinovecchio.removeClass('active');

    $(pallino).addClass('active');

    switch (imagine.hasClass()) {
      case !'active':

        imaginevecchia.removeClass('active');
        imagine.addClass('active');
        break;
    }

  })


  frecciaDx.click(function(){
      var img = $('.active');
      var first = $(' .first');
      var cerchio =$('.nav i.active');
      var cerchiofirst = $('.nav .first');
      img.removeClass('active').next().addClass('active');

      if (img.hasClass('last')) {
        img.removeClass('active');
        first.addClass('active');
      }
  })

  frecciaSx.click(function(){
    var img = $('.active');
    var last = $('.last');
    img.removeClass('active').prev().addClass('active');
     if (img.hasClass('first')) {
       img.removeClass('active');
       last.addClass('active');
     }
  })
}
