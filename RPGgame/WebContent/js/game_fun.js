//obs�uga zak�adek na stronie
function changeTab(tab){
		$(".selected").attr('class', 'hide');
		$(tab+"_d").attr('class','selected');
		$(tab+"_s").attr('class','selected');
	}
	