$(document).ready( ()=> {
	main();
	beautyScroll(); 
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

function beautyScroll() {
	$('nav a').click(function(e){				
		e.preventDefault();		//evitar el eventos del enlace normal
		var strAncla=$(this).attr('href'); //id del ancla
			$('body,html').stop(true,true).animate({				
				scrollTop: $(strAncla).offset().top
			},1000);
		
	});
}