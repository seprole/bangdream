window.onload = function () {
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");

  navBarToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });

  // document.getElementById("img2").onmouseover = function () {
  //   mouseOver1();
  // };
  // document.getElementById("img2").onmouseout = function () {
  //   mouseOut1();
  // };
  // document.getElementById("img3").onmouseover = function () {
  //   mouseOver2();
  // };
  // document.getElementById("img3").onmouseout = function () {
  //   mouseOut2();
  // };
  // document.getElementById("img4").onmouseover = function () {
  //   mouseOver3();
  // };
  // document.getElementById("img4").onmouseout = function () {
  //   mouseOut3();
  // };

  // function mouseOver1() {
  //   document.getElementById("img3").style.opacity = 0.15;
  //   document.getElementById("img4").style.opacity = 0.15;
  //   document.getElementById("img4").style.animation.opacity;
  // }
  // function mouseOut1() {
  //   document.getElementById("img3").style.opacity = 1;
  //   document.getElementById("img4").style.opacity = 1;
  // }

  // function mouseOver2() {
  //   document.getElementById("img2").style.opacity = 0.15;
  //   document.getElementById("img4").style.opacity = 0.15;
  // }
  // function mouseOut2() {
  //   document.getElementById("img2").style.opacity = 1;
  //   document.getElementById("img4").style.opacity = 1;
  // }

  // function mouseOver3() {
  //   document.getElementById("img2").style.opacity = 0.15;
  //   document.getElementById("img3").style.opacity = 0.15;
  // }
  // function mouseOut3() {
  //   document.getElementById("img2").style.opacity = 1;
  //   document.getElementById("img3").style.opacity = 1;
  // }
};

$(document).ready(function () {
  $("#img2").hover(
    function () {
      $("#img3").css("opacity", 0.1);
      $("#img4").css("opacity", 0.1);
    },
    function () {
      $("#img3").css("opacity", 1);
      $("#img4").css("opacity", 1);
    }
  );
  $("#img3").hover(
    function () {
      $("#img2").css("opacity", 0.1);
      $("#img4").css("opacity", 0.1);
    },
    function () {
      $("#img2").css("opacity", 1);
      $("#img4").css("opacity", 1);
    }
  );
  $("#img4").hover(
    function () {
      $("#img2").css("opacity", 0.1);
      $("#img3").css("opacity", 0.1);
    },
    function () {
      $("#img2").css("opacity", 1);
      $("#img3").css("opacity", 1);
    }
  );
});
