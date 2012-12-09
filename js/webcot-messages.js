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
messages[0] = [{char: "samon", message: "あめんぼあかいな", imgNumber: 3},
               {char: "sannosuke", message: "あいうえお", imgNumber: 3},
               {char: "sakube", message: "うきもにこえびもおよいでる", imgNumber: 2}];
messages[1] = [{char: "samon", message: "かきのきくりのき", imgNumber: 2},
               {char: "sakube", message: "かきくけこ", imgNumber: 2},
               {char: "sannosuke", message: "きつつきこつこつ", imgNumber: 1},
               {char: "sakube", message: "かれけやき", imgNumber: 2}];
messages[2] = [{char: "sannosuke", message: "ささげにすをかけ", imgNumber: 3},
               {char: "samon", message: "さしすせそ", imgNumber: 3},
               {char: "sakube", message: "そのうおあさせで", imgNumber: 1},
               {char: "sannosuke", message: "さしました", imgNumber: 3},
               {char: "samon", message: "らいちょうさむかろらりるれろ", imgNumber: 3}];
