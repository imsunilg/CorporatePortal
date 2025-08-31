$(document).ready(function () {
     

    $(".Homeicon").click(function () {  
       // var url = `@(Url.Content("~/"))`;
         
        //window.location.href = `${url}Portal/Home`;
        window.location.href = `Home`;
    });

  $(document).on('click', '.nav-parent .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $('.dropdown-nav-option a').on('click', function () {
    var dataDropmenu = $(this).attr('data-child-dropdown-item');
    $(this).parents('.dropdown-menu').find('.main-dropdown').addClass('d-none');
    $(this).parents('.dropdown-menu').find('.child-dropdown[data-child-dropdown=' + dataDropmenu + ']').addClass('d-flex');
  });

  $('.dropdown-nav-back a').on('click', function () {
    var dataDropitem = $(this).parents('.child-dropdown').attr('data-child-dropdown');
    $(this).parents('.child-dropdown').removeClass('d-flex');
    $(this).parents('.dropdown-menu').find('.main-dropdown').removeClass('d-none');
  });
});

$(document).ready(function () {
  $(document).on('click', '.home-accordion-body', function (e) {
    e.stopPropagation();
  });
  $('.dropdown-nav-option a').on('click', function () {
    var dataDropmenu = $(this).attr('data-child-dropdown-item');
    $(this).parents('.home-accordion-body').find('.main-dropdown').addClass('d-none');
    $(this).parents('.home-accordion-body').find('.child-dropdown[data-child-dropdown=' + dataDropmenu + ']').addClass('d-flex');
  });

  $('.dropdown-nav-back a').on('click', function () {
    var dataDropitem = $(this).parents('.child-dropdown').attr('data-child-dropdown');
    $(this).parents('.child-dropdown').removeClass('d-flex');
    $(this).parents('.home-accordion-body').find('.main-dropdown').removeClass('d-none');
  });
});



// button nav toggle

const toggleButton = document.querySelector('#toggle-button');
const closeButton = document.querySelector('.toggle-content .d-flex img:last-child');
const toggleContent = document.querySelector('.toggle-content');

toggleButton.addEventListener('click', function () {
  toggleContent.classList.toggle('active');
});

closeButton.addEventListener('click', function () {
  toggleContent.classList.remove('active');
});


const toggleButton2 = document.querySelector('#toggle-button-mob');
const closeButton2 = document.querySelector('.toggle-content.toggle-content-mob .d-flex img:last-child');
const toggleContent2 = document.querySelector('.toggle-content.toggle-content-mob');
toggleButton2.addEventListener('click', function () {
  toggleContent2.classList.toggle('active');
  // Get reference to the body element
  const body = document.querySelector('body');
    // Append new HTML content to the body element
    body.insertAdjacentHTML('beforeend', '<div class="backdrop"></div>');
});

closeButton2.addEventListener('click', function () {
  toggleContent2.classList.remove('active');
  const newDiv = document.querySelector('.backdrop');
  // Remove the newly appended div from the DOM
  newDiv.remove();

});





// banner slider

$('#bannerSlider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  infinite: true,
  autoplaySpeed: 15000,
  autoplay: true,
  fade: true,
});


// testimonial slider

$(document).ready(function () {
  $('#testimonial-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#testimonial-slider').slick('refresh')
  });
});


$(document).ready(function () {
    $('#Pharma-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#Pharma-slider').slick('refresh')
    });
});

//Manufacturing Industry CEO slider
$(document).ready(function () {
    $('#Manufacturing-Ceo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#Manufacturing-Ceo-slider').slick('refresh')
    });
});
// Manufacturing Industry slider

$(document).ready(function () {
    $('#Manufacturing-industry-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
      $('#Manufacturing-industry-slider').slick('refresh')
  });
});

// Construction Industry slider

$(document).ready(function () {
    $('#Construction-industry-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#Construction-industry-slider').slick('refresh')
    });
});


//Construction Industry CEO slider
$(document).ready(function () {
    $('#Construction-Ceo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#Construction-Ceo-slider').slick('refresh')
    });
});

// ITES Industry slider

$(document).ready(function () {
    $('#ites-industry-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#ites-industry-slider').slick('refresh')
    });
});


//ITES Industry CEO slider
$(document).ready(function () {
    $('#ites-Ceo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#ites-Ceo-slider').slick('refresh')
    });
});

// Banking Industry slider

$(document).ready(function () {
    $('#banking-industry-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#banking-industry-slider').slick('refresh')
    });
});


//Banking Industry CEO slider
$(document).ready(function () {
    $('#banking-Ceo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#banking-Ceo-slider').slick('refresh')
    });
});



// FMCG Industry slider

$(document).ready(function () {
    $('#fmcg-industry-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#fmcg-industry-slider').slick('refresh')
    });
});


//FMCG Industry CEO slider
$(document).ready(function () {
    $('#fmcg-Ceo-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    fade: true,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".industry-info .collapse").on('show.bs.collapse', function () {
        $('#fmcg-Ceo-slider').slick('refresh')
    });
});


// risk management slider

if (window.innerWidth <= 768) {
  $('#image-slider').slick({
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    infinite: false
  })
}



// awards and accolades slider

$('.slider-container').slick({
  centerMode: true,
  centerPadding: '120px',
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
        infinite: true
      }
    },

    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '20px',
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '20px',
        infinite: true,
        arrows: true
      }
    }
  ]
});


// map section effect

$(document).ready(function () {

  $(window).on('scroll', function () {
    var offset = $(".map-wrapper").offset().top - $(window).scrollTop();
    if (offset <= 600 && offset >= -282) {
      $(".map-wrapper").addClass('zoomIn');
      console.log('Class added');
    } else {
      $(".map-wrapper").removeClass('zoomIn');
    }
  })
})


// Get references to the toggle button and toggle content

document.querySelector(".read-more").addEventListener("click", function(e){
  e.preventDefault();
  var contentDiv =this.parentNode;
  contentDiv.classList.toggle('show-more');
  this.textContent =contentDiv.classList.contains('show-more')? 'Read less': 'Read more'
})


$(document).ready(function () {
  $('#testimonial-slider1').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#testimonial-slider1').slick('refresh')
  });
});


$(document).ready(function () {
  $('#testimonial-slider2').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#testimonial-slider2').slick('refresh')
  });
});


$(document).ready(function () {
  $('#testimonial-slider3').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#testimonial-slider3').slick('refresh')
  });
});

$(document).ready(function () {
  $('#industry-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider').slick('refresh')
  });
});


$(document).ready(function () {
  $('#industry-slider1').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider1').slick('refresh')
  });
});



$(document).ready(function () {
  $('#industry-slider2').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider2').slick('refresh')
  });
});



$(document).ready(function () {
  $('#industry-slider3').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider3').slick('refresh')
  });
});

$(document).ready(function () {
  $('#industry-slider4').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider4').slick('refresh')
  });
});


$(document).ready(function () {
  $('#industry-slider5').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1
        }
      }
    ]
  });
  $(".industry-info .collapse").on('show.bs.collapse', function () {
    $('#industry-slider5').slick('refresh')
  });
});



//added custome alert box code
function AlertBox(alertTitle, alertContent) {
    if (alertTitle == 'error') {
        $.alert({
            title: 'Error!',
            content: alertContent,
            animation: 'none',
            animateFromElement: false,
        });
    }
    else if (alertTitle == 'alert') {
        $.alert({
            title: 'Alert!',
            content: alertContent,

           // type: 'red',
            //icon: 'fa-solid fa-circle-exclamation',
            icon: 'fa fa-warning',
            closeIcon: true,
            //closeIconClass: 'fa fa-close',

            animation: 'scale',
            closeAnimation: 'scale',
            animateFromElement: false,
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            buttons:
            {
                Close: {
                    btnClass: 'login-btn',
                },
            } 
        });
    }
    else if (alertTitle == 'success') {
        $.alert({
            title: 'Success',
            content: alertContent,

           // type: 'green',
            //icon: "fa-solid fa-square-check", 
            closeIcon: true,
            //closeIconClass: 'fa fa-close',

            animation: 'scale',
            closeAnimation: 'scale',
            animateFromElement: false,
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            buttons:
            {
                Close: {
                    btnClass: 'login-btn',
                },
            } 
        });
    }
    else if (alertTitle == 'warning') {
        $.alert({
            title: 'Warning!',
            content: alertContent,

            //type: 'red',
            //icon: 'fa fa-warning',
            closeIcon: true,
            //closeIconClass: 'fa fa-close',

            animation: 'scale',
            closeAnimation: 'scale',
            animateFromElement: false,
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            buttons:
            {
                Close: {
                    btnClass: 'login-btn',
                },
            }
        });
    }
    else if (alertTitle == 'fail') {
        $.alert({
            title: 'Failed',
            content: alertContent,
            animation: 'scale',
            closeAnimation: 'scale',
            animateFromElement: false,
        });
    }
    else {
        $.alert({
            title: alertTitle,
            content: alertContent,
            closeIcon: true,
            animation: 'scale',
            closeAnimation: 'scale',
            animateFromElement: false,
            columnClass: 'col-md-4 col-md-offset-8 col-xs-4 col-xs-offset-8',
            buttons:
            {
                Close: {
                    btnClass: 'btn-default',
                },
            }
        });
    }
}

