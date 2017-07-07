$(document).ready(function(){
	//INTERVALO DE TIEMPO 5 SEG.
    $("#carousel").carousel({interval: 5000});

    //PREV
    $('.left').click(function() {
    	$('#carousel').carousel("prev");
    });
    //NEXT
    $('.right').click(function(){
    	$('#carousel').carousel("next");
    });

    $('.item1').click(function(){
    	$('#carousel').carousel(0);
    });
     $('.item2').click(function(){
    	$('#carousel').carousel(1);
    });
      $('.item3').click(function(){
    	$('#carousel').carousel(2);
    });
     $('.item4').click(function(){
    	$('#carousel').carousel(3);
    });
     $('.item5').click(function(){
    	$('#carousel').carousel(4);
    });
     $('.item6').click(function(){
    	$('#carousel').carousel(5);
    });  
});