/*
 *html読み込み時に実行する関数
 */
$(function() {

  //メッセージ表示フラグの初期化
  messageDispFlg = 0;

  //キャラクターの数だけ初期化する
  for(iChar=0;iChar<characters.length;iChar++){

    //キャラクターごとにすべてのふきだしを処理する
    for(iBalloon=0;iBalloon<balloonMax;iBalloon++){

      //ふきだしを非表示にする
      $(characters[iChar].balloonId + iBalloon).hide();
      $(characters[iChar].messageId + iBalloon).hide();
    }

    //キャラクターのクリックを待つ
    $(characters[iChar].nameId).click(function () {
      
      //クリック時の処理関数呼び出し
      funcClick();
    });
  }

  //画像のプリロード
  var tagStr = "";

  //画像の数だけタグを生成する
  for(iImg=0;iImg<charImgFile.length;iImg++){
    tagStr=tagStr + "<img src='" + charImgFile[iImg] + "' />";
  }

  //HTMLのimg-cacheに書き出し
  document.getElementById("img-cache").innerHTML=tagStr;
});

/*
 *キャラクターがクリックされたときに使用する関数
 */
function funcClick(){

  //メッセージが表示されている場合
  if (messageDispFlg == 1) {

    //メッセージ表示停止
    funcMessageStop();

  //メッセージが表示されていない場合
  } else {

    //メッセージ表示フラグをONにする
    messageDispFlg = 1;

    //メッセージ用配列にランダムメッセージを設定
    var messages = randomMessages;
    
    //現在時刻を取得
    var nowDate = new Date();
    var nowHours = nowDate.getHours();

    //現在時刻が時間帯の配列に存在していればメッセージをランダムメッセージに連結
    if (earlyTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(earlyMessages);
    }
    if (morningTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(morningMessages);
    }
    if (afternoonTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(afternoonMessages);
    }
    if (eveningTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(eveningMessages);
    }
    if (nightTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(nightMessages);
    }
    if (lateTimes.indexOf(nowHours) >= 0){
      messages = messages.concat(lateMessages);
    }
    
    //メッセージ表示
    funcMessageStart(messages);
  }
};


/*
 *メッセージを表示するときに使用する関数
 */
function funcMessageStart(messages){

  //ランダムな数値を取得する
  var randomNo = Math.floor(Math.random()*messages.length)

  //ループ変数の初期化
  var iLoop=0;

  //setTimeoutを利用してdisplayMessage関数を定義
  setTimeout(function displayMessage(){
    
    //メッセージが終わったらループを抜ける
    if(!(iLoop<messages[randomNo].length)) return;

    //charNoにキャラクター番号をセット
    var charNo = messages[randomNo][iLoop].charNo;

    //ふきだしの文字列にメッセージを設定する
    document.getElementById(characters[charNo].messageStr + characters[charNo].loopNo).innerHTML=messages[randomNo][iLoop].message;

    //キャラクターの画像を設定する
    document.getElementById(characters[charNo].nameStr).innerHTML="<img src='./img/" + characters[charNo].nameStr + "-" + messages[randomNo][iLoop].imgNo + ".png' />";

    //ふきだしを表示する
    $(characters[charNo].balloonId + characters[charNo].loopNo).show(100);
    $(characters[charNo].messageId + characters[charNo].loopNo).show(100);

    //メッセージのループ数を+1
    characters[charNo].loopNo++;

    //ループ変数を+1
    iLoop++;

    //timerの配列にdisplayMessage関数をセット
    timer[iLoop] = setTimeout(displayMessage,balloonSpeed);
  })
}


/*
 *メッセージの表示をとめるときに使用する関数
 */
function funcMessageStop(){

  //メッセージ表示フラグの初期化
  messageDispFlg = 0;
  
  //キャラクター表示タイマーの停止
  for(iTimer=0;iTimer<timer.length;iTimer++){
    clearTimeout(timer[iTimer]);
  }
  
  //キャラクターの数だけ初期化する
  for(iChar=0;iChar<characters.length;iChar++){

    //キャラクターごとにすべてのふきだしを処理する
    for(iBalloon=0;iBalloon<balloonMax;iBalloon++){

      //ふきだしの文字列を空白にする
      document.getElementById(characters[iChar].messageStr + iBalloon).innerHTML="";

      //キャラクターの画像を「1」に戻す
      //document.getElementById(characters[iChar].nameStr).innerHTML="<img src='./img/" + characters[iChar].nameStr + "-1.png' />";

      //ふきだしを非表示にする
      $(characters[iChar].balloonId + iBalloon).hide(100);
      $(characters[iChar].messageId + iBalloon).hide(100);
    }

    //メッセージのループ数を初期化する
    characters[iChar].loopNo = 0;
  }
}

  //メッセージ表示フラグの宣言
  var messageDispFlg = 0;

  //キャラクター表示タイマー配列の宣言
  var timer = new Array();


