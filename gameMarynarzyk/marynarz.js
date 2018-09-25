var pktLeft = 0;
var pktRight = 0;

/*========================================*/


function random(){
                
                
  var myimages=new Array()
                
        myimages[1]="kamien.jpg alt=\"Kamień\""
        myimages[2]="nozyce.jpg alt=\"Nożyce\""
        myimages[3]="papier.jpg alt=\"Papier\""

                var los1=Math.floor(Math.random()*myimages.length)
                var los2=Math.floor(Math.random()*myimages.length)
                if (los1 == 0) los1=1;
                if (los2 == 0) los2=1;
  
        if(los1 == 1 && los2 == 2) pktLeft++;
        else if(los1 == 1 && los2 == 3) pktRight++;
        else if(los1 == 2 && los2 == 1) pktRight++;
        else if(los1 == 2 && los2 == 3) pktLeftt++;
        else if(los1 == 3 && los2 == 1) pktLeft++;
        else if(los1 == 3 && los2 == 2) pktRight++;

  
        document.getElementById("leftHands").innerHTML='<span class="score" id="scoreLeft"><p>'+pktLeft+'</p></span><img src=picture/marynarzyk/'+myimages[los1]+'>';
        document.getElementById("rightHands").innerHTML='<span class="score" id="scoreRight"><p>'+pktRight+'</p></span><img id="rotateRightHand" src=picture/marynarzyk/'+myimages[los2]+'>';

}

function startShowMarynarzyk()
{
  document.getElementsByClassName("game")[0].innerHTML='<div class="hands" id="leftHands"></div>'+'<div class="button" id="buttonStart"></div>'+'<div class="hands" id="rightHands"></div>';
  
  
  
  document.getElementById("leftHands").innerHTML='<span class="score" id="scoreLeft"><p>0</p></span><img src="picture/marynarzyk/kamien.jpg" alt="Kamień">';
  document.getElementById("rightHands").innerHTML='<span class="score" id="scoreRight"><p>0</p></span><img src="picture/marynarzyk/kamien.jpg" id="rotateRightHand" ale="Kamień">';
  document.getElementById("buttonStart").innerHTML='<button id="start" onclick="random()">start</button>';
  
}
