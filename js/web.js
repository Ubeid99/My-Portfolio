

// <<<Hamburger for responsive look>>>

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


 
 var pos = document.documentElement;
 pos.addEventListener('mousemove' , e =>{
      pos.style.setProperty('--x' , e.clientX + 'px')
      pos.style.setProperty('--y' , e.clientY + 'px')
 })

 $('.form__btn').click(function() {
  $('.mail__letter').toggleClass('move');
  $('.mail__top').toggleClass('closed');
  $('.form__btn--invisible').toggleClass('visible');
  $('.form__btn--visible').toggleClass('invisible');
});




$('input').focus(function() {
  $(this).parent().addClass('active');
  $('input').focusout(function() {
    if($(this).val() == '') { $(this).parent().removeClass('active');
    } else { $(this).parent().addClass('active');
    }
  })
});







$(document).ready(function() {
  $("[unique-script-id='w-w-dm-id'] .img .desc").hide();

  $("[unique-script-id='w-w-dm-id'] .img").mouseenter(function(item) {
    $("[unique-script-id='w-w-dm-id'] .img .overlay").removeClass("overlay-visible");
    $("[unique-script-id='w-w-dm-id'] .img .desc").hide();
    $("#" + $(item.currentTarget).attr("id") + ' .overlay').addClass("overlay-visible");
    $("#" + $(item.currentTarget).attr("id") + ' .desc').show();
    console.log(item.currentTarget);
  });
  $("[unique-script-id='w-w-dm-id'] .tab").click(function() {
    const value = $(this).attr('data-filter');
    if (value == 'all') {
      $("[unique-script-id='w-w-dm-id'] .img").show('5000');
    } else {
      $("[unique-script-id='w-w-dm-id'] .img").not('.' + value).hide('5000');
      $("[unique-script-id='w-w-dm-id'] .img").filter('.' + value).show('5000');
    }
  });

  $("[unique-script-id='w-w-dm-id'] .tab").click(function() {
    $(this).addClass('tab-active').siblings().removeClass('tab-active');
  });
})

