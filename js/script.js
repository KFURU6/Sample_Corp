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
                    $form.slideUp();
                    $('#js-success').slideDown();
                },
                200: function () {
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
            $submit.prop('disabled', false);
        } else {
            $submit.prop('disabled', true);
        }
    })

    const resultsContent = document.getElementsByClassName('results__content');
    console.log(resultsContent)
    window.addEventListener('load', function () {
        for (let i = 3; i < resultsContent.length; i++) {
            const newElement = document.createElement("span");
            newElement.setAttribute("class", "results__round");
            const parentDiv = document.getElementById("results__count");
            parentDiv.appendChild(newElement);
        }
    });
    const resultsContents = document.getElementById('contents')
    const resultsRound = document.getElementsByClassName('results__round');
    resultsContents.addEventListener('scroll', function (e) {
        let resultsContentsLeftPosition = resultsContents.getBoundingClientRect().left;
        for (let i = 0; i < resultsContent.length; i++) {
            let resultsContentLeftPosition = resultsContent[i].getBoundingClientRect().left;
            const resultsContentWidth = resultsContent[i].clientWidth;
            if (resultsContentLeftPosition + resultsContentWidth < 0) {
                resultsRound[i].classList.remove('is-active');
            }
            else if (resultsContentsLeftPosition >= resultsContentLeftPosition) {
                resultsRound[i].classList.add('is-active');
            }
            else {
                resultsRound[i].classList.remove('is-active');
            }
        }
    });
});