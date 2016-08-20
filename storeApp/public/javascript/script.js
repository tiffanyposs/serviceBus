$(document).ready(function() {

   $('.show-hide-description').on('click', function() {
   	   var $productTile = $(this).closest('.product-tile');
   	   $productTile.find('> .show-hide-description').toggleClass('hide');
	   var $info = $productTile.find('.description');
	   $info.toggle('hide');
	   return false;
    });

   window.app = {};

   window.app.confirmBuy = function(item) {
   	  console.log(item);
   }



});