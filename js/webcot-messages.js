/*
 *メッセージの配列を宣言
 */
var messages = new Array();

/*
 *メッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
messages[0] = [{charNo: 0, message: "さもです。", imgNo: 2},
               {charNo: 2, message: "さくだ。", imgNo: 1},
               {charNo: 1, message: "さのだよー。", imgNo: 1}];
messages[1] = [{charNo: 0, message: "何かに似ている気がする？気のせいです。", imgNo: 1},
               {charNo: 1, message: "気のせいだな！", imgNo: 2},
               {charNo: 2, message: "気のせい気のせい。", imgNo: 2}];
messages[2] = [{charNo: 1, message: "ブラウザに居座ることになるとは思わなかった。", imgNo: 1},
               {charNo: 2, message: "ここは狭いね。", imgNo: 2},
               {charNo: 1, message: "せめてデスクトップならな。", imgNo: 2},
               {charNo: 2, message: "ねー。", imgNo: 2},
               {charNo: 0, message: "……そんなこと言ってると消されるよ。", imgNo: 3}];
