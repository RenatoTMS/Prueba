
$(document).ready
$(function(){
    $('.parrafo1').on('dblclick', function(){
        $('.parrafo1').css('color','green');
            });
    $('.parrafo2').on('dblclick', function(){
        $('.parrafo2').css('color','yellow');
        });
    $('.parrafo3').on('dblclick', function(){
    $('.parrafo3').css('color','red');
        });

    $("a").click(function(event){
        if (this.hash !== ""){
        event.preventdefault();
        var gato = this.hash;

    $("html, body").animate({
        srollTop: $(gato).offset().srollTop 
    }, 800, function(){
        window.location.hash = gato;
        });
    }
});