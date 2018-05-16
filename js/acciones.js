// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('http://www.udg.mx/es/efemerides/2017/05-mayo').tap(function(){
			navigator.notification.beep(2);
		}); //cierre del tap de beep
		$('https://www.jstor.org/stable/25134615?seq=1#page_scan_tab_contents').tap(function(){
			);
		});//cierre del tap de vibarar
	},false);//cierre del EvenListener
});//cieerre de la funcion principal