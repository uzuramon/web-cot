$(function() {
  for(a=0;a<characters.length;a++){
    for(b=0;b<talk;b++){
      $(characters[a].koeId + b).hide();
      $(characters[a].kotobaId + b).hide();
    }
  
    $(characters[a].nameId).click(function () {
      funcClick();
    });
    
  }

});

function funcClick(){

  var visflg = 0;
  for(g=0;g<characters.length;g++){
   if ($(characters[g].koeId + "0").is(':visible')){
     visflg = 1;
   }
  }

  if (visflg == 1) {

    for(c=0;c<characters.length;c++){
      for(d=0;d<talk;d++){
        document.getElementById(characters[c].kotoba + d).innerHTML="";
        $(characters[c].koeId + d).hide(100);
        $(characters[c].kotobaId + d).hide(100);
      }
      characters[c].loopNum = 0;
    }

  } else {

    var randomNum = Math.floor(Math.random()*messages.length)
    
    for( i=0;i<messages[randomNum].length;i++){
      for(k=0;k<characters.length;k++){
        if(messages[randomNum][i].char == characters[k].name){
          document.getElementById(characters[k].kotoba + characters[k].loopNum).innerHTML=messages[randomNum][i].message;
          document.getElementById(characters[k].name).innerHTML="<img src='./img/" + characters[k].name + messages[randomNum][i].imgNumber + ".png' />";
          $(characters[k].koeId + characters[k].loopNum).delay(i*speed).show(100);
          $(characters[k].kotobaId + characters[k].loopNum).delay(i*speed).show(100);
          characters[k].loopNum++;
        }
      }
    }

  }
};


var messages = new Array();

messages[0] = [{char: "samon", message: "こっちだー！", imgNumber: 1},
               {char: "sakube", message: "どこだー！", imgNumber: 1}];
messages[1] = [{char: "samon", message: "あっちだー！", imgNumber: 2},
               {char: "sakube", message: "そっちじゃねえ！", imgNumber: 2}];
messages[2] = [{char: "sakube", message: "にげんな！", imgNumber: 2},
               {char: "samon", message: "にげてない！", imgNumber: 1},
               {char: "sakube", message: "まてまて！", imgNumber: 1}];

var characters = new Array();

characters[0] = {name: "samon", kotoba: "samon-kotoba", nameId: "#samon", koeId: "#samon-koe", kotobaId: "#samon-kotoba", loopNum: 0};
characters[1] = {name: "sakube", kotoba: "sakube-kotoba", nameId: "#sakube", koeId: "#sakube-koe", kotobaId: "#sakube-kotoba", loopNum: 0};


var speed = 500;

var talk = 3;


