$(document).ready(function () {
  $(".your-class").slick({
    accessibility: true,
    //autoplay: true,
    arrows: true,
    //autoplaySpeed: 5000,
    respondTo: "min",
  });

  let navBarOffset = $("#navBar").offset().top;

  let porSec = $("#porSec").offset().top - 50.390625;
  let clientRevSEc = $("#clientRevSEc").offset().top - 50.78125;
  let skillSEc = $("#skillSEc").offset().top - 115.171875;
  let contactSec = $("#contactSec").offset().top - 125.359375;

  $("#home,#home2").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });
  $("#loaderToAbout,#about,#about2").click(function () {
    $("body,html").animate({ scrollTop: navBarOffset }, 1000);
  });
  $("#portfolio,#portfolio2").click(function () {
    $("body,html").animate({ scrollTop: porSec }, 1000);
  });
  $("#reviews,#reviews2").click(function () {
    $("body,html").animate({ scrollTop: clientRevSEc }, 1000);
  });

  $("#services,#services2").click(function () {
    $("body,html").animate({ scrollTop: skillSEc }, 1000);
  });
  $("#contact,#contact2").click(function () {
    $("body,html").animate({ scrollTop: contactSec }, 1000);
  });

  $(window).scroll(function () {
    let scrollVal = $(window).scrollTop();

    if (scrollVal <= navBarOffset) {
      $("#home,#home2").addClass("active");
      $("#about,#about2").removeClass("active");
      $("#portfolio,#portfolio2").removeClass("active");
      $("#reviews,#reviews2").removeClass("active");
      $("#services,#services2").removeClass("active");
      $("#contact,#contact2").removeClass("active");
    }
    if (scrollVal >= navBarOffset && scrollVal < porSec) {
      $("#home,#home2").removeClass("active");
      $("#about,#about2").addClass("active");
      $("#portfolio,#portfolio2").removeClass("active");
      $("#reviews,#reviews2").removeClass("active");
      $("#services,#services2").removeClass("active");
      $("#contact,#contact2").removeClass("active");
    }
    if (scrollVal >= porSec && scrollVal < clientRevSEc) {
      $("#home,#home2").removeClass("active");
      $("#about,#about2").removeClass("active");
      $("#portfolio,#portfolio2").addClass("active");
      $("#reviews,#reviews2").removeClass("active");
      $("#services,#services2").removeClass("active");
      $("#contact,#contact2").removeClass("active");
    }
    if (scrollVal >= clientRevSEc && scrollVal < skillSEc) {
      $("#home,#home2").removeClass("active");
      $("#about,#about2").removeClass("active");
      $("#portfolio,#portfolio2").removeClass("active");
      $("#reviews,#reviews2").addClass("active");
      $("#services,#services2").removeClass("active");
      $("#contact,#contact2").removeClass("active");
    }
    if (scrollVal >= skillSEc && scrollVal < contactSec) {
      $("#home,#home2").removeClass("active");
      $("#about,#about2").removeClass("active");
      $("#portfolio,#portfolio2").removeClass("active");
      $("#reviews,#reviews2").removeClass("active");
      $("#services,#services2").addClass("active");
      $("#contact,#contact2").removeClass("active");
    }
    if (scrollVal >= contactSec) {
      $("#home,#home2").removeClass("active");
      $("#about,#about2").removeClass("active");
      $("#portfolio,#portfolio2").removeClass("active");
      $("#reviews,#reviews2").removeClass("active");
      $("#services,#services2").removeClass("active");
      $("#contact,#contact2").addClass("active");
    }
    if (scrollVal >= 400) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut(100);
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 1000);
  });

  $("#sendMsg").click(function () {
    console.log($("#nameField").val());
    console.log($("#mailField").val());
    console.log($("#mailBody").val());
  });
  let projLinks = [
    "https://github.com/iamhobv/E-commerce-JavaScriptProject",
    "https://github.com/iamhobv/RWD-responsive-hosto-webpage",
    "https://github.com/iamhobv/beIN-Sports-Clone",
  ];
  let projName = ["hosto-webpage", "E-commerce", "beIN-Sports-Clone"];

  let projImg = ["", "", ""];
  let proj = document.getElementsByClassName("projs");

  for (let i = 0; i < proj.length; i++) {
    proj[i].addEventListener("click", function () {
      // window.location.href = ;
      window.open(`${projLinks[i]}`);
    });
  }
});
//https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com
