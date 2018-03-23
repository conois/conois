$(document).ready( ()=> {
	main();
	beautyScroll();
	modal();
	closeModal();  
})

function main(){
	contador = 1; 
	$(".menu_bar").click( () => {
		if(contador == 1){
			$("#logo").hide()
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
			$("#logo").fadeIn()
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

function modal () {
	$(".btnMore").click( () => {
		const e = event.target.id;  
		for ( let i=0; i<project.length; i++) {
			if ( e == project[i].id ) {
				$(".modal").html(`
					<!-- Modal -->
						<div id="modal_project" class="modal">
							<div class="modal_bg"></div>
							<div class="modal_main">
								<div class="modal_header">
									<img height="40px" width="40px" src="assets/img/Button-7-close-icon.png" class="close">
								</div>
								<div class="modal_body">
									<div class="row">
										<div class="col-md-9 iframe">
											<iframe src="${project[i].url}"></iframe>
										</div>
										<div class="col-md-3 description_project">
											<div class="info_project">
												<h1>${project[i].title}</h1>
												<p>Description: ${project[i].description}</p>
												<p>Habilities: ${project[i].habilities}</p>
												<p>Design for : ${project[i].design_to}</p> 
											</div>
											<div>
												<button class="btnCode"><a href="${project[i].code}" target="_blank">See the code</a></button>
											</div>	
										</div>
									</div>			
								</div>
							</div>	<!-- modal main  -->
						</div>

					`)
			}
		}
		$(".modal").fadeIn();
	})
}

function closeModal() {
	$(document).on("click", ".close", function (){
		$(".modal").fadeOut(); 
	} ) 
}
