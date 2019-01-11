var user1 = document.querySelector(".user1")
var maindiv = document.querySelector(".mainDiv")
var leftEL =0;
var topEl = 0;

function generateRandomNumber(min_value , max_value) 
{
    return Math.random() * (max_value-min_value) + min_value ;
} 

setInterval(function(){
var yem = document.querySelector(".yem")  
if(yem!=null){
    yem.remove()
} 
var div = document.createElement("div")
div.classList.add("yem")
div.style.left = generateRandomNumber(0,700)+"px"
div.style.top = generateRandomNumber(0,350)+"px"
maindiv.appendChild(div)

},1000)

window.addEventListener("keyup",function(e){
   if(e.keyCode==39 && leftEL<750){
    leftEL+=10
    user1.style.left = leftEL+"px"
   
   }
   else if(e.keyCode==37 && leftEL>0){
    leftEL-=10
    user1.style.left = leftEL+"px"
   }
   else if(e.keyCode==38 && topEl>0){
      
       topEl-=10
    user1.style.top = topEl+"px"
   }
   else if(e.keyCode==40 && topEl<350){
    
    topEl+=10
  
    user1.style.top = topEl+"px"
   }

})