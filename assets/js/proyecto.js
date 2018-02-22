$(document).ready( ()=> {
	main(); 
})

function main(){
	contador = 1; 
	$(".menu_bar").click( () => {
		if(contador == 1){
			$("nav").animate({
				left: '0', 
			})
			$('body').addClass('noscroll');
			contador = 0; 
		} else{
			contador = 1; 
			$("nav").animate({
				left: '-100%',
			})
			$('body').removeClass('noscroll');
		}
	})
}