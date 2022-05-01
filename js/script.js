$(function () {
    $('.header__hamburger-icon').click(function (e) {
        e.preventDefault();
        $('.header, main, .footer, .header__hamburger-icon, .header__hamburger-icon span, .header__nav, .header__nav-bg').toggleClass('is-open');
        return false;
    });

    $('a[href^="#"]').on('click', function(e) {
        const headerHeight = $('.header').innerHeight();
        const id = $(this).attr('href');
        let idOffsetTop = 0;
        if (id != '#') {
          idOffsetTop = $(id).offset().top - headerHeight;
        }
        $('html, body').animate({
          scrollTop: idOffsetTop
        }, 2000);
      });

      $('dt').on('click', function() {
          $(this).next().slideToggle();
          $(this).toggleClass('is-open');
      });

      $(window).on('scroll', function() {
          let onScroll = $(this).scrollTop();
          if (innerHeight < onScroll) {
              $('.to-top').fadeIn();
          }
          else {
              $('.to-top').fadeOut();
          }
      });

    new WOW().init();

    let $form = $('#js-form')
    $form.submit(function (e) {
        $.ajax({
            url: $form.attr('action'),
            data: $form.serialize(),
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理 
                    $form.slideUp();
                    $('#js-success').slideDown();
                },
                200: function () {
                    //送信に失敗したときの処理 
                    $form.slideUp();
                    $('#js-error').slideDown();
                }
            }
        });
        return false;
    });

    let $submit = $('#js-submit');
    $('#js-form input, #js-form textarea').on('change', function () {
        if (
            $('#js-form input[type="text"]').val() !== "" &&
            $('#js-form input[type="email"]').val() !== "" &&
            $('#js-form input[name="entry.435838897"]').val() !== "" &&
            $('#js-form input[name="entry.804454943"]').prop('checked') === true
        ) {
            // 全て入力された時
            $submit.prop('disabled', false);
            // $('#js-form input[type="submit]').prop('disabled', false);
            // $submit.addClass('-active');
        } else {
            // 入力されていない時
            $submit.prop('disabled', true);
            // $('#js-form input[type="submit]').prop('disabled', true);
            // $submit.removeClass('-active');
        }
    })

    
    const resultsContent = document.getElementsByClassName('results__content');
    console.log(resultsContent)
    window.addEventListener('load', function () {
        for (let i = 0; i < resultsContent.length; i++) {
            const newElement = document.createElement("span");
            newElement.setAttribute("class", "results__round");
            const parentDiv = document.getElementById("results__count");
            parentDiv.appendChild(newElement);
        }
    });

    let top = resultsContent.offsetWidth;
    console.log(top);

    // const resultsContentLeftScroll = resultsContent.position();
    // console.log(resultsContentLeftScroll);

    // const resultsContents = document.getElementById('contents');
    // resultsContents.addEventListener('scroll', function() {
    //     console.log('34');
    // });
    
 


    //   const swiper = new Swiper('.swiper', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: true,
      
    //     // If we need pagination
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
      
    //     // Navigation arrows
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
      
    //     // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
    //   });

});

// $(document).ready(function(){
//     $('.results__contents').slick({
//     //   setting-name: setting-value
//     });
//   });