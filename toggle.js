function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){
	$(".nav-div").click(function(){
		var div = $("#side").css("display");
	if(div!=="none"){
		$("#side").css("display", "none");
	}
		else{ 
			$("#side").css("display", "block");
		}
	});
});