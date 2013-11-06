//obs³uga zak³adek na stronie
function changeTab(tab){
		$(".selected").attr('class', 'hide');
		$(tab+"_d").attr('class','selected');
		$(tab+"_s").attr('class','selected');
	}

function addHeader(){
	$('#Header').load('header.html');
	alert("juz");
}
	