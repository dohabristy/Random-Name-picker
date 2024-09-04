var participents = document.getElementById('participents');
var shufflingarea = document.querySelector(".suffarea p");
var winners;

document.getElementById("start").addEventListener("click", function(){
    if (participents.value == "") {
        alert("Please Enter Participants Name.....?");
    } else {
        getWinners();
    }
});

function getNames (){
    var names = participents.value.split(",");
    winners = names[Math.floor(Math.random() * names.length)];
    shufflingarea.innerText = (winners);

    // disable start button

    var btn = document.getElementById("start");
    btn.style.background= "#eee";
    btn.setAttribute("disable", " disabled");
}

function getWinners(){
   var stop = setInterval(function() { getNames()}, 10);
    // var stop setInterval(function(){ getNames();},10);
    
    var c = 3;
    var t;
    var time_on = 0;

    function timer(){
        document.querySelector(".timer h3").innerText= (c)
        c = c-1;
        t= setTimeout(timer, 1000);

        if(c >=0 ){
            var winner = document.getElementById("winner");
            winner.innerText = (winners)
            
        }else{
            stopCount();
            clearInterval(stop)
            // shufflingarea.innerText= ("Completered");
        }
       
        
    }
    timer();
    
    function stopCount(){
        clearTimeout(t);
        time_on= 0;
    }
    
 }

