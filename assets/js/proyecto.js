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
			$("#logo").fadeOut()
			$("nav").animate({
				top: '6%', 
			})
			$('body').addClass('noscroll');
			contador = 0; 
		} else{
			contador = 1;
			$("nav").animate({
				top: '-120%',
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
				if( e == "food_map"){
					$(".modal").html(`
					<!-- Modal -->
						<div id="modal_project" class="modal">
							<div class="modal_bg"></div>
							<div class="modal_main">
								<div class="modal_header">
									<span class="close"><i class="far fa-window-close"></i></span>
								</div>
								<div class="modal_body">
									<div class="row">
										<div class="col-md-9 col-sm-8 iframe">
											<iframe height="549px" width="320px" src="${project[i].url}" id="iframeFood"></iframe>
										</div>
										<div class="col-md-3 col-sm-4 description_project">
											<div class="info_project">
												<h1>${project[i].title}</h1>
												<p>Description: ${project[i].description}</p>
												<p>Habilities: ${project[i].habilities}</p>
												<p>Design for : ${project[i].design_to}</p> 
											</div>
											<div>
												<button class="btnCode"><a href="${project[i].code}" target="_blank">Code<i class="fas fa-code"></i></a></button>
											</div>	
										</div>
									</div>			
								</div>
							</div>	<!-- modal main  -->
						</div>

					`)
				} else {
					$(".modal").html(`
					<!-- Modal -->
						<div id="modal_project" class="modal">
							<div class="modal_bg"></div>
							<div class="modal_main">
								<div class="modal_header">
									<span class="close"><i class="far fa-window-close"></i></span>
								</div>
								<div class="modal_body">
									<div class="row">
										<div class="col-md-9 col-sm-8 iframe">
											<iframe src="${project[i].url}"></iframe>
										</div>
										<div class="col-md-3 col-sm-4 description_project">
											<div class="info_project">
												<h1>${project[i].title}</h1>
												<p>Description: ${project[i].description}</p>
												<p>Habilities: ${project[i].habilities}</p>
												<p>Design for : ${project[i].design_to}</p> 
											</div>
											<div>
												<button class="btnCode"><a href="${project[i].code}" target="_blank">Code<i class="fas fa-code"></i></a></button>
											</div>	
										</div>
									</div>			
								</div>
							</div>	<!-- modal main  -->
						</div>

					`)

				}
				
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

function openProyectMobile(){
}
