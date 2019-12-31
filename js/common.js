$(function(){

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },
    });

	function randomImage(){


	    var bannerImages=new Array();

	    for (var i = 0; i < 20; i++) {
	    	bannerImages[i]="../img/"+round+"/"+i+".jpg";
	    }

	    shuffle(bannerImages);
	 
	 	for(var j=0; j<20; j++) {
	 		$('.swiper-slide').eq(j).find('img').attr({src : bannerImages[j]});
	 	}
	 
	    
	                
	}

	function shuffle(a) {
		 var x, y, z; 
		 for (z = a.length; z; z -= 1) { 
		 	x = Math.floor(Math.random() * z); 
		 	y = a[z - 1]; 
		 	a[z - 1] = a[x]; 
		 	a[x] = y; 
		 } 
	}


	randomImage();

});