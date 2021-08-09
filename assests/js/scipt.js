
$(document).ready(function(){
$('.parrafo1').on('dblclick', function(){
$('.parrafo1').css('color','green');
});
$('.parrafo2').on('dblclick', function(){
$('.parrafo2').css('color','yellow');
});
$('.parrafo3').on('dblclick', function(){
$('.parrafo3').css('color','red');
});
});
$("a").click(function(Event){
if (this.hash !==) {
     event.preventDefault();
var gato = this.hash
$("html,body").animated({
    scrolltop: $(gato).offset().top 
        }, 800, function(){window.location.hash = gato;
        });
}
});
});