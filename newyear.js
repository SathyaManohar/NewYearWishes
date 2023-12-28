document.querySelector("button").addEventListener("click",whattodo);
function whattodo(){
    if(this.innerHTML==="Click to Say Bye 2k23"){
        
       
        
          document.querySelector("body").classList.add("newclass");
        setTimeout(function(){
          document.querySelector("body").classList.remove("newclass");
        },2000);
         setTimeout(function(){
            window.location.href = "newpage.html";
        }, 3000);
        setTimeout(function(){
window.location.href="newpage.html";
 
        },5000);
        
       
    }
    
}