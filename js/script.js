function init(){

	function albox(){
    	var enter = document.getElementById('entryinput');
    
    	var toutput = document.getElementById('textoutput');
    	toutput.innerHTML = enter.value;
    	alert('Krish Dhungana: ' + enter.value);
    
}
  
  		var button = document.getElementById('entrybutton');
  		button.addEventListener('click', albox);
  
}
window.addEventListener('load', init);