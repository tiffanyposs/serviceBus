$(document).ready(function() {


   $('.show-hide-description').on('click', function() {
   	   var $productTile = $(this).closest('.product-tile');
   	   $productTile.find('.show-hide-description').toggleClass('hide');
   	   // var $show = $productTile
	   var $info = $productTile.find('.description');
	   $info.toggle('hide');
	   return false;
    });


});