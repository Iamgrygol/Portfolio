var plansza = "<div style=\"clear:both\"</div>";
var buttonStartChin = "<button id=\"startChin\" onclick=\"startGameChinczyk()\"></button>";
var rollCube = "<button id=\"cubeChin\" onclick=\"cubeToGame()\"></button>"
var PionekPole = new Array(121);
var polaRuch = new Array(40);

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




var redPawn = "picture/chinczyk/PionekCzerw.png";
var greenPawn = "picture/chinczyk/PionekZiel.png";
var yellowPawn = "picture/chinczyk/PionekZolty.png";
var bluePawn = "picture/chinczyk/PionekNieb.png";

var cube = 1;
var nr = "";


var CheckID = "";
var CheckIDarea = "";

function CheckerID(){
  
    var body = document.querySelector('.game');

body.addEventListener("click", function(event) {
	var id = event.target.id;
});
  CheckID = "#" + event.target.id;
}

function CheckerParentID(){
  
  var el = document.querySelector(CheckID);
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
  
  document.getElementsByClassName("game")[0].innerHTML= buttonStartChin + rollCube + '<div class="centerPlansza">'+ plansza + '</div>';
}

function startGameChinczyk(){
  startPionkiCzerwone();
  startPionkiNiebieskie();
  startPionkiZolte();
  startPionkiZielone();
    }

function startPionkiCzerwone(){
  var x = 0;

  var nr = 1;
  for(i=0; i<4; i++)
    { 
      if(x == 2) x = 11;
      var id ="rP";
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" id="'+ id +'" onclick="StartmovePownRed()" src="'+ redPawn +'">';
      x++;
      nr++; 
    }
}

function startPionkiNiebieskie(){
  var x = 9;
  
  var nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 11) x = 20;
      var id="bP"
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" id="'+ id +'" onclick="StartmovePownBlue()" src="'+ bluePawn +'">';
      x++;
      nr++;
    }
}

function startPionkiZolte(){
  var x = 99;
  
  var nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 101) x = 110;
      var id="yP"
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" id="'+ id +'" onclick="StartmovePownYellow()" src="'+ yellowPawn +'">';
      x++;
      nr++;
    }
}

function startPionkiZielone(){
  var x=  108;
  
  var nr = 1;
  for(i=0; i<4; i++)
    { 
      
      if(x == 110) x = 119;
      var id="gP";
      id = id + nr;
      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" id="'+ id +'" onclick="StartmovePownGreen()" src="'+ greenPawn +'">';
      x++;
      nr++;
    }
}

function cubeToGame(){
  
  cube = Math.floor(Math.random() * 7)
  if(cube == 0) cube++;
  
  document.getElementById("cubeChin").innerHTML=cube;
}

function StartmovePownRed(){
CheckerID();
CheckerParentID();
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
CheckerParentID();
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
CheckerParentID();
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
CheckerParentID();
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
  CheckerParentID();
  
  var x;
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
  CheckerParentID();

  var x;
  var dupa;
   var el = document.querySelector(CheckIDarea);
  x = + el.childElementCount;
  if(x > 1)
    {
      document.querySelector("#pole11").appendChild(document.querySelector(CheckID));
    } 
}


