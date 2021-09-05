
var first = document.querySelector('.first .protoflio');
var second= document.querySelector('.first .test');
var popup1 =  document.querySelector('.popup1');
var popup2 =  document.querySelector('.popup2');
var closed =  document.getElementById('close');
var closed2 =  document.getElementById('close2');


first.onclick = function(){

    popup1.style.display = 'block';
    console.log(';;;');

}
closed.onclick = function(){
  //  popup1.style.display = 'none'; 
    console.log(857848)
}
second.onclick = function(){

    popup2.style.display = 'block';
    

}
closed2.onclick = function(){
   popup2.style.display = 'none'; 
    
}

$(document).ready(function(){


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,

    responsive:{
        0:{
            items:1,
            nav:true,
            
        },
        600:{
            items:1,
            nav:true,
           
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});
});

