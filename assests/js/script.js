
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
var nav=document.querySelector('nav');
window.addEventListener('scroll',function(){
    if (window.pageYOffset>173){
        nav.classList.add('bg-dark','shadow');
    }else{
        nav.classList.remove('bg-dark','shadow');
    }
});