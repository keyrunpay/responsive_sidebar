// Author : kiran Neupane
// facebook : fb.com/kiran.neupz
// Github :  https://github.com/keyrunpay


var target=document.querySelector('.bars').dataset.target;
var sidenav=document.getElementById(target);

function sidenav_big(){
   let items=sidenav.querySelectorAll('ul li span');
   sidenav.style.width="auto";
   for(let i=0;i<items.length;i++){
       items[i].style.display="inline-block";
   }
}
function sidenav_small(){
    let items=sidenav.querySelectorAll('ul li span');
    sidenav.style.width="60px";
    for(let i=0;i<items.length;i++){
        items[i].style.display="none";
    }
 }

document.querySelector('.menuToggler').addEventListener("click",function(){
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if(w>768){
        if(toogleClass(this.querySelector('.bars'),'on')){
            sidenav_small();
        }else{
            sidenav_big();
        }
    }else{
        document.querySelector('.sidenav').style.display="block";
    }    
});

function toogleClass(item,className){
    if(item.classList.contains(className)){
        item.classList.remove(className);
        return true;
    }else{
        item.classList.add(className);
        return false;
    }
}