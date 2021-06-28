$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots:true,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });