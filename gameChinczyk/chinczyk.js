var plansza = "<div style=\"clear:both\"</div>";
var buttonStartChin = "<button id=\"startChin\" onclick=\"startGameChinczyk()\"></button>"
var PionekPole = new Array(121);




var nr = "";
function startShowChinczyk()
{
    
    for(i=0; i<121;i++)
    {
      pole = "pole" + i;
       plansza = plansza + '<div id="'+pole+'" class="plansza">'+pole+'</div>';
      if((i+1) % 11 == 0) plansza = plansza + '<div style="clear:both"</div>';
      PionekPole[i] = pole;
    }
  
  document.getElementsByClassName("game")[0].innerHTML= buttonStartChin + '<div class="centerPlansza">'+ plansza + '</div>';
}

function startGameChinczyk(){
  startPionkiCzerwone();
  startPionkiNiebieskie();
  startPionkiZolte();
  startPionkiZielone();
    }

function startPionkiCzerwone(){
  var x = 0;
  for(i=0; i<4; i++)
    { 
      if(x == 2) x = 11;

      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" src="picture/chinczyk/chinczykPionekCzerw.png">';
      x++;
    }
}

function startPionkiNiebieskie(){
  var x = 9;
  for(i=0; i<4; i++)
    { 
      
      if(x == 11) x = 20;

      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" src="picture/chinczyk/chinczykPionekCzerw.png">';
      x++;
    }
}

function startPionkiZolte(){
  var x = 99;
  for(i=0; i<4; i++)
    { 
      
      if(x == 101) x = 110;

      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" src="picture/chinczyk/chinczykPionekCzerw.png">';
      x++;
    }
}

function startPionkiZielone(){
  var x=  108;
  for(i=0; i<4; i++)
    { 
      
      if(x == 110) x = 119;

      document.getElementById(PionekPole[x]).innerHTML='<img class="pionekChin" src="picture/chinczyk/chinczykPionekCzerw.png">';
      x++;
    }
}