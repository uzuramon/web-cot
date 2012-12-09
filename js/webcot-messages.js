/*
 *メッセージの配列を宣言
 */
var messages = new Array();

/*
 *メッセージ
 * 1会話単位に配列に保存します。
 * char: キャラクター名（webcot-characters.jsのcharcters[].nameと同じ値を設定します） 
 * mesage: ふきだしに表示するメッセージ
 * char: 画像番号
 */
messages[0] = [{char: "samon", message: "こっちだー！", imgNumber: 1},
               {char: "sakube", message: "どこだー！", imgNumber: 1}];
messages[1] = [{char: "samon", message: "あっちだー！", imgNumber: 2},
               {char: "sakube", message: "そっちじゃねえ！", imgNumber: 2}];
messages[2] = [{char: "sakube", message: "にげんな！", imgNumber: 2},
               {char: "samon", message: "にげてない！", imgNumber: 1},
               {char: "sakube", message: "まてまて！", imgNumber: 1}];
