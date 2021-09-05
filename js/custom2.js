
var first = document.querySelector('.first .protoflio');
var second= document.querySelector('.first .test');
var popup1 =  document.querySelector('.popup1');

var closed =  document.getElementById('close');



first.onclick = function(){

    popup1.style.display = 'block';
    console.log(';;;');

}
closed.onclick = function(){
    popup1.style.display = 'none'; 
    console.log('jihih');
}


var clicked = Array.from(document.querySelectorAll('.popup1 .i a'));
var boxs = Array.from(document.querySelectorAll('.popup1 .shuffle .aps'))


for(let i=0;i<clicked.length;i++){
    clicked[i].onclick = function(){
        clicked[i].classList.remove('col-active');
        clicked[i].classList.add('col-active');
        
        remove();
        boxs[i].classList.add('active');
      

    }


    
}



function remove(){
    boxs.forEach(function(box){
        box.classList.remove('active');
      
    })};
