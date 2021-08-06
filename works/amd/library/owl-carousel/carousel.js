      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 20,
		nav: true,
		navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        loop: true,
        responsive: {
          0: {
            items: 2
          },

		  800: {
            items: 3
          },
		  
		  1024: {
            items: 4
          },
		    
		  1440: {
            items: 5
          }
        }
      })