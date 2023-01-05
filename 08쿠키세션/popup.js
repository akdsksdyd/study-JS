var check = document.getElementById("check");
var btn = document.getElementById("btn");

btn.onclick = function(){
    if(check.checked === true){
        
        var date = new Date();
        date.setHours(33);
        date.setMinutes(0);
        date.setSeconds(0);
        
        document.cookie = "popup=true;path=/;expires="+date.toUTCString();

        window.close();
    }
}