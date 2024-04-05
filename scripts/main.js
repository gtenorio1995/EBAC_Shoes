$(document).ready(function () {
  $(".menu-burguer").click(function () {
    $("nav").slideToggle();
  });

  $("nav a").click(function () {
    const documentWidth = $(document).width();

    if(documentWidth < 640){
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1000
      );
      $("nav").slideUp();
    }else{
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        1000
      );
    }
  });
});
