/*
 *キャラクターの配列を宣言
 */
var characters = new Array();

/*
 *キャラクター
 * 1キャラ単位に配列に保存します。
 * nameStr: キャラクター画像のid（#なし）
 * messageStr: ふきだしのid（#なし、末尾の番号は付けない）
 * nameId: キャラクター画像のid
 * balloonId: ふきだしのid（末尾の番号は付けない）
 * messageId: メッセージのid（末尾の番号は付けない）
 * loopNo: ループ回数（初期値＝0）
 */
characters[0] = {nameStr: "samon", 
                 messageStr: "samon-message", 
                 nameId: "#samon", 
                 balloonId: "#samon-balloon", 
                 messageId: "#samon-message", 
                 loopNo: 0};
characters[1] = {nameStr: "sakube", 
                 messageStr: "sakube-message", 
                 nameId: "#sakube", 
                 balloonId: "#sakube-balloon", 
                 messageId: "#sakube-message", 
                 loopNo: 0};
characters[2] = {nameStr: "sannosuke", 
                 messageStr: "sannosuke-message", 
                 nameId: "#sannosuke", 
                 balloonId: "#sannosuke-balloon", 
                 messageId: "#sannosuke-message", 
                 loopNo: 0};


/*
 *キャラクター画像の定義（プリロード用）
 */
var charImgFile= new Array();

charImgFile[0]="./img/samon-1.png";
charImgFile[1]="./img/samon-2.png";
charImgFile[2]="./img/samon-3.png";
charImgFile[3]="./img/sakube-1.png";
charImgFile[4]="./img/sakube-2.png";
charImgFile[5]="./img/sannosuke-1.png";
charImgFile[6]="./img/sannosuke-2.png";
charImgFile[7]="./img/samon-balloon.png";
charImgFile[8]="./img/sakube-balloon.png";
charImgFile[9]="./img/sannosuke-balloon.png";

