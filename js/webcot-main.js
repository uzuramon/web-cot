/*
 *html読み込み時に実行する関数
 */
$(function() {

  //キャラクターの数だけ初期化する
  for(a=0;a<characters.length;a++){

    //キャラクターごとにすべてのふきだしを処理する
    for(b=0;b<talk;b++){

      //ふきだしを非表示にする
      $(characters[a].koeId + b).hide();
      $(characters[a].kotobaId + b).hide();
    }

    //キャラクターのクリックを待つ
    $(characters[a].nameId).click(function () {
      
      //クリック時の処理関数呼び出し
      funcClick();
    });
  }
});

/*
 *キャラクターがクリックされたときに使用する関数
 */
function funcClick(){

  //ふきだしが表示されているか判定する
  //ふきだし表示用のフラグを初期化
  var visflg = 0;

  //キャラクターの数だけ判定する
  for(g=0;g<characters.length;g++){

    //ふきだしが表示されている場合はフラグに1を設定
    if ($(characters[g].koeId + "0").is(':visible')){
      visflg = 1;
    }
  }

  //ふきだしが表示されていた場合
  if (visflg == 1) {

    //キャラクターの数だけ初期化する
    for(c=0;c<characters.length;c++){

      //キャラクターごとにすべてのふきだしを処理する
      for(d=0;d<talk;d++){

        //ふきだしの文字列を空白にする
        document.getElementById(characters[c].kotoba + d).innerHTML="";

        //キャラクターの画像を「1」に戻す
        //document.getElementById(characters[c].name).innerHTML="<img src='./img/" + characters[c].name + "-1.png' />";

        //ふきだしを非表示にする
        $(characters[c].koeId + d).hide(100);
        $(characters[c].kotobaId + d).hide(100);
      }

      //メッセージのループ数を初期化する
      characters[c].loopNum = 0;
    }

  //ふきだしが表示されていなかった場合
  } else {

    //ランダムな数値を取得する
    var randomNum = Math.floor(Math.random()*messages.length)

    //メッセージの数だけ処理する
    for( i=0;i<messages[randomNum].length;i++){

      //メッセージを表示するキャラクターを探す
      for(k=0;k<characters.length;k++){

        //メッセージを表示するキャラクターの場合
        if(messages[randomNum][i].char == characters[k].name){

          //ふきだしの文字列にメッセージを設定する
          document.getElementById(characters[k].kotoba + characters[k].loopNum).innerHTML=messages[randomNum][i].message;

          //キャラクターの画像を設定する
          document.getElementById(characters[k].name).innerHTML="<img src='./img/" + characters[k].name + "-" + messages[randomNum][i].imgNumber + ".png' />";

          //ふきだしを表示する
          $(characters[k].koeId + characters[k].loopNum).delay(i*speed).show(100);
          $(characters[k].kotobaId + characters[k].loopNum).delay(i*speed).show(100);

          //メッセージのループ数を+1
          characters[k].loopNum++;
        }
      }
    }
  }
};



