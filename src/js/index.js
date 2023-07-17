function Info() {
  $('#ModalLogin').modal('show');
};

$(document).ready(function (){

  $("#scroll-down").hide();
  $("#cntnt1").hide();
  $("#cntnt2").hide();
  $("#tickets").hide();
  $("#map").hide();
  $("#galery").hide();
  $("#aboutus").hide();


  if ($(window).width() < 700){
    $('#img-ikan2').after($('#desk-ikan2'));

    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 100) {
        $("#scroll-down").show();
        $("#navbarSupportedContent").addClass("navbar-scrolled");
      } else {
        $("#scroll-down").hide();
        $("#navbarSupportedContent").removeClass("navbar-scrolled");
      }
      if (y > 1443){
        $("#cntnt1").show();
        $("#cntnt1").addClass("d-flex");
      } else {
        $("#cntnt1").hide();
      }
      if (y > 1916){
        $("#cntnt2").show();
        $("#cntnt2").addClass("d-flex");
      } else {
        $("#cntnt2").hide();
      }
      if (y > 2406){
        $("#tickets").show();
        $("#tickets").addClass("d-block");
      } else {
        $("#tickets").hide();
      }
      if (y > 3597){
        $("#map").show();
        $("#map").addClass("d-block");
      } else {
        $("#map").hide();
      }
      if (y > 4038){
        $("#galery").show();
        $("#galery").addClass("d-block");
      } else {
        $("#galery").hide();
      }
      if (y > 4421){
        $("#aboutus").show();
        $("#aboutus").addClass("d-block");
      } else {
        $("#aboutus").hide();
      }
  });
  }else{
    $('#desk-ikan2').after($('#img-ikan2'));

    $(document).scroll(function () {
      var y = $(this).scrollTop();

      if (y > 100) {
        $("#scroll-down").show();
        $("#navbarSupportedContent").addClass("navbar-scrolled");
      } else {
        $("#scroll-down").hide();
        $("#navbarSupportedContent").removeClass("navbar-scrolled");
      }
      if (y > 800){
        $("#cntnt1").show();
        $("#cntnt1").addClass("d-flex");
      } else {
        $("#cntnt1").hide();
      }
      if (y > 1148){
        $("#cntnt2").show();
        $("#cntnt2").addClass("d-flex");
      } else {
        $("#cntnt2").hide();
      }
      if (y > 1485){
        $("#tickets").show();
        $("#tickets").addClass("d-block");
      } else {
        $("#tickets").hide();
      }
      if (y > 1931){
        $("#map").show();
        $("#map").addClass("d-block");
      } else {
        $("#map").hide();
      }
      if (y > 2423){
        $("#galery").show();
        $("#galery").addClass("d-block");
      } else {
        $("#galery").hide();
      }
      if (y > 3108){
        $("#aboutus").show();
        $("#aboutus").addClass("d-block");
      } else {
        $("#aboutus").hide();
      }
  });
  }
})

window.onresize = function(){
  if ($(window).width() < 700){
    $('#img-ikan2').after($('#desk-ikan2'))
  }else{
    $('#desk-ikan2').after($('#img-ikan2'))
  }
}
