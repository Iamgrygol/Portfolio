let pktLeftScore = 0;
let pktRightScore = 0;

let x = 0;
  let myimages=new Array(3)
                
        myimages[0]="kamien.jpg alt=\"Kamień\""
        myimages[1]="nozyce.jpg alt=\"Nożyce\""
        myimages[2]="papier.jpg alt=\"Papier\""

/*========================================*/


function random(){
                
       let los=Math.floor(Math.random()*myimages.length)

        if(x == 0 && los == 1) pktLeftScore++;
        else if(x == 0 && los == 2) pktRightScore++;
        else if(x == 1 && los == 0) pktRightScore++;
        else if(x == 1 && los == 2) pktLeftScore++;
        else if(x == 2 && los == 0) pktLeftScore++;
        else if(x == 2 && los == 1) pktRightScore++;
  
        document.getElementById("pktLeft").innerHTML='<span class="score" id="scoreLeft"><p>'+pktLeftScore+'</p></span>';
        document.getElementById("pktRight").innerHTML='<span class="score" id="scoreRight"><p>'+pktRightScore+'</p></span>';
        document.getElementById("rightHands").innerHTML='<img id="rotateRightHand" src=picture/marynarzyk/'+myimages[los]+'>';
  
gesture();

}

function startShowMarynarzyk()
{
  document.getElementsByClassName("game")[0].innerHTML='<div id="pktLeft" class="pkt"></div><div id="pktRight" class="pkt"></div><div class="hands" id="leftHands"></div>'+'<div class="button" id="buttonStart"></div>'+'<div class="hands" id="rightHands"></div>'+'<div class="menu"><div class="choose" onclick="chooseKamien()"><img src="picture/marynarzyk/kamien.jpg" alt="dłoń złożona w kamień"></div><div class="choose" onclick="choosePapier()"><img src="picture/marynarzyk/papier.jpg" alt="dłoń ułożona w papier"></div><div class="choose" onclick="chooseNozyce()"><img src="picture/marynarzyk/nozyce.jpg" alt="dłoń ułożona w nożyce"></div></div>';
  
  
  document.getElementById("pktLeft").innerHTML='<span class="score" id="scoreLeft"><p>0</p>';
  document.getElementById("pktRight").innerHTML='<span class="score" id="scoreRight"><p>0</p>';
  document.getElementById("leftHands").innerHTML='</span><img src="picture/marynarzyk/kamien.jpg" alt="Kamień">';
  document.getElementById("rightHands").innerHTML='</span><img src="picture/marynarzyk/kamien.jpg" id="rotateRightHand" ale="Kamień">';
  document.getElementById("buttonStart").innerHTML='<button id="start" onclick="random()">start</button>';
  
}

function gesture(){    
  document.getElementById("leftHands").style.transform = "rotate(-10deg)";
  document.getElementById("rightHands").style.transform = "rotate(10deg)"; 
  setTimeout("gestureBack()",100)
}

function gestureBack()
{
  document.getElementById("leftHands").style.transform = "rotate(0deg)";
  document.getElementById("rightHands").style.transform = "rotate(0deg)"; 
}

function chooseKamien(){
  document.getElementById("leftHands").innerHTML='<img src=picture/marynarzyk/'+myimages[0]+'>';
  x = 0;
}

function chooseNozyce(){
  document.getElementById("leftHands").innerHTML='<img src=picture/marynarzyk/'+myimages[1]+'>';
  x = 1;
}

function choosePapier(){
  document.getElementById("leftHands").innerHTML='<img src=picture/marynarzyk/'+myimages[2]+'>';
  x = 2;
}

