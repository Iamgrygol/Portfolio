let plansza = "<div style=\"clear:both\"</div>";
let buttonStartChin = "<button id=\"startChin\" onclick=\"startGameChinczyk()\"></button>";
let rollCube = "<button id=\"cubeChin\" onclick=\"cubeToGame()\"></button>";
let PionekPole = new Array(121);
let polaRuch = new Array(40);

let zIdhasz;

/* Łopatologiczna tablica */

polaRuch[0] = "#pole44";
polaRuch[1] = "#pole45";
polaRuch[2] = "#pole46";
polaRuch[3] = "#pole47";
polaRuch[4] = "#pole48";
polaRuch[5] = "#pole37";
polaRuch[6] = "#pole26";
polaRuch[7] = "#pole15";
polaRuch[8] = "#pole4";
polaRuch[9] = "#pole5";
polaRuch[10] = "#pole6";
polaRuch[11] = "#pole17";
polaRuch[12] = "#pole28";
polaRuch[13] = "#pole39";
polaRuch[14] = "#pole50";
polaRuch[15] = "#pole51";
polaRuch[16] = "#pole52";
polaRuch[17] = "#pole53";
polaRuch[18] = "#pole54";
polaRuch[19] = "#pole65";
polaRuch[20] = "#pole76";
polaRuch[21] = "#pole75";
polaRuch[22] = "#pole74";
polaRuch[23] = "#pole73";
polaRuch[24] = "#pole72";
polaRuch[25] = "#pole83";
polaRuch[26] = "#pole94";
polaRuch[27] = "#pole105";
polaRuch[28] = "#pole116";
polaRuch[29] = "#pole115";
polaRuch[30] = "#pole114";
polaRuch[31] = "#pole103";
polaRuch[32] = "#pole92";
polaRuch[33] = "#pole81";
polaRuch[34] = "#pole70";
polaRuch[35] = "#pole69";
polaRuch[36] = "#pole68";
polaRuch[37] = "#pole67";
polaRuch[38] = "#pole66";
polaRuch[39] = "#pole55";




let redPawn = "picture/chinczyk/PionekCzerw.png";
let greenPawn = "picture/chinczyk/PionekZiel.png";
let yellowPawn = "picture/chinczyk/PionekZolty.png";
let bluePawn = "picture/chinczyk/PionekNieb.png";

let cube = 1;
let nr = "";
let y;


let CheckID = "";
let CheckIDarea = "";

function CheckerID(){
  
    let body = document.querySelector('.game');

body.addEventListener("click", function(event) {
	let id = event.target.id;
});
  CheckID = "#" + event.target.id;
}

function CheckerParentID(x){
  
  let el = document.querySelector(x);
  CheckIDarea ="#" + el.parentElement.id;
}

function startShowChinczyk()
{
    for(i=0; i<121;i++)
    {
      pole = "pole" + i;
       plansza = plansza + '<div id="'+pole+'" class="plansza">'+pole+'</div>';
      if((i+1) % 11 == 0) plansza = plansza + '<div style="clear:both"</div>';
      PionekPole[i] = pole;
    }
  
  document.getElementsByClassName("game")[0].innerHTML= buttonStartChin + rollCube +'<div class="centerPlansza">' + plansza + '</div>';
  
}

function startGameChinczyk(){
  startPionkiCzerwone();
  startPionkiNiebieskie();
  startPionkiZolte();
  startPionkiZielone();
    }

function startPionkiCzerwone(){
  let x = 0;

  let nr = 1;
  for(i=0; i<4; i++)
    { 
      if(x == 2) x = 11;
      let id ="rP";
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin red" id="'+ id +'" onclick="StartmovePownRed()" src="'+ redPawn +'">';
      x++;
      nr++; 
    }
}

function startPionkiNiebieskie(){
  let x = 9;
  
  let nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 11) x = 20;
      let id="bP"
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin blue" id="'+ id +'" onclick="StartmovePownBlue()" src="'+ bluePawn +'">';
      x++;
      nr++;
    }
}

function startPionkiZolte(){
  let x = 99;
  
  let nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 101) x = 110;
      let id="yP"
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin yellow" id="'+ id +'" onclick="StartmovePownYellow()" src="'+ yellowPawn +'">';
      x++;
      nr++;
    }
}

function startPionkiZielone(){
  let x=  108;
  
  let nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 110) x = 119;
      let id="gP";
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin green" id="'+ id +'" onclick="StartmovePownGreen()" src="'+ greenPawn +'">';
      x++;
      nr++;
    }
}

function cubeToGame(){
  
  cube = Math.floor(Math.random() * 7)
  if(cube == 0) cube++;
  
  document.getElementById("cubeChin").innerHTML= cube;
}

function StartmovePownRed(){
CheckerID();
CheckerParentID(CheckID);
  if(CheckIDarea == "#pole0" || CheckIDarea == "#pole1" || CheckIDarea == "#pole11" || CheckIDarea == "#pole12")
   {
      /* if(cube == 6) */
     document.querySelector("#pole44").appendChild(document.querySelector(CheckID));
  }
  else
    movePown();
}

function StartmovePownBlue(){
CheckerID();
CheckerParentID(CheckID);
  if(CheckIDarea == "#pole9" || CheckIDarea == "#pole10" || CheckIDarea == "#pole20" || CheckIDarea == "#pole21")
   {
      /* if(cube == 6) */
     document.querySelector("#pole6").appendChild(document.querySelector(CheckID));
  }
  else
    movePown();
}

function StartmovePownGreen(){
CheckerID();
CheckerParentID(CheckID);
  if(CheckIDarea == "#pole108" || CheckIDarea == "#pole109" || CheckIDarea == "#pole119" || CheckIDarea == "#pole120")
   {
      /* if(cube == 6) */
     document.querySelector("#pole76").appendChild(document.querySelector(CheckID));
  }
  else
    movePown();
}

function StartmovePownYellow(){
CheckerID();
CheckerParentID(CheckID);
  if(CheckIDarea == "#pole99" || CheckIDarea == "#pole100" || CheckIDarea == "#pole110" || CheckIDarea == "#pole111")
   {
      /* if(cube == 6) */
     document.querySelector("#pole114").appendChild(document.querySelector(CheckID));
  }
  else
    movePown();
}

function movePown(){
  CheckerID();
  CheckerParentID(CheckID);
  
  let x;
  for(i=0; i<40; i++)
    {
      
      if(CheckIDarea == polaRuch[i])
        {
          x = i + cube;
          if(x > 39)
            {
              x =  x - 40;
            }
        
          document.querySelector(polaRuch[x]).appendChild(document.querySelector(CheckID));     
        }
    }
  
  spankPown();

}

function spankPown(){
  CheckerParentID(CheckID);
  if(document.querySelector(CheckIDarea).childElementCount > 1)
    {
      if(document.querySelector(CheckID).className == "pionekChin red")
        {
          if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin blue") checkBlueStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin green") checkGreenStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin yellow") checkYellowStarter(); 
        }
      else if(document.querySelector(CheckID).className == "pionekChin blue")
        {
          if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin red") checkRedStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin green") checkGreenStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin yellow") checkYellowStarter(); 
        }
      else if(document.querySelector(CheckID).className == "pionekChin green")
        {
          if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin blue") checkBlueStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin red") checkRedStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin yellow") checkYellowStarter(); 
        }
      else if(document.querySelector(CheckID).className == "pionekChin yellow")
        {
          if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin blue") checkBlueStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin green") checkGreenStarter();
          else if(document.querySelector(CheckIDarea).firstElementChild.className == "pionekChin red") checkRedStarter(); 
        }
      
    } 
}

function checkRedStarter(){
  
  let x = "#" + document.querySelector(CheckIDarea).firstElementChild.id;
  
  if(x == "#rP1" || x == "#rP2" || x == "#rP3" || x == "#rP4")
    {
    if(document.querySelector("#pole0").childElementCount == 0)
          document.querySelector("#pole0").appendChild(document.querySelector(x));
    else if(document.querySelector("#pole1").childElementCount == 0)
          document.querySelector("#pole1").appendChild(document.querySelector(x));
    else if(document.querySelector("#pole11").childElementCount == 0)
          document.querySelector("#pole11").appendChild(document.querySelector(x));
    else if(document.querySelector("#pole12").childElementCount == 0)
          document.querySelector("#pole12").appendChild(document.querySelector(x));
    }
}

function checkBlueStarter(){
  
  let x = "#" + document.querySelector(CheckIDarea).firstElementChild.id;
   
  if(x == "#bP1" || x == "#bP2" || x == "#bP3" || x == "#bP4")
    {
  if(document.querySelector("#pole9").childElementCount == 0)
        document.querySelector("#pole9").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole10").childElementCount == 0)
         document.querySelector("#pole10").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole20").childElementCount == 0)
         document.querySelector("#pole20").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole21").childElementCount == 0)
         document.querySelector("#pole21").appendChild(document.querySelector(x));
}
} 

  function checkGreenStarter(){
  
  let x = "#" + document.querySelector(CheckIDarea).firstElementChild.id;
   
  if(x == "#gP1" || x == "#gP2" || x == "#gP3" || x == "#gP4")
    {
  if(document.querySelector("#pole108").childElementCount == 0)
        document.querySelector("#pole108").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole109").childElementCount == 0)
         document.querySelector("#pole109").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole119").childElementCount == 0)
         document.querySelector("#pole119").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole120").childElementCount == 0)
         document.querySelector("#pole120").appendChild(document.querySelector(x));
    }
  }
    
    function checkYellowStarter(){
  
  let x = "#" + document.querySelector(CheckIDarea).firstElementChild.id;
   
  if(x == "#yP1" || x == "#yP2" || x == "#yP3" || x == "#yP4")
    {
  if(document.querySelector("#pole99").childElementCount == 0)
        document.querySelector("#pole99").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole100").childElementCount == 0)
         document.querySelector("#pole100").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole110").childElementCount == 0)
         document.querySelector("#pole110").appendChild(document.querySelector(x));
  else if(document.querySelector("#pole111").childElementCount == 0)
         document.querySelector("#pole111").appendChild(document.querySelector(x));
    }
}
      
  


