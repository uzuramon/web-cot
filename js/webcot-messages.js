/*
 *メッセージの配列を宣言
 */
var randomMessages = new Array();
var earlyMessages = new Array();
var morningMessages = new Array();
var afternoonMessages = new Array();
var eveningMessages = new Array();
var nightMessages = new Array();
var lateMessages = new Array();


/*
 *時間帯の設定
 * 時間単位で数値を指定します
 * ここで指定した時間にだけメッセージを表示します
 */
var earlyTimes = new Array(5, 6, 7, 8);
var morningTimes = new Array(9, 10, 11);
var afternoonTimes = new Array(12, 13, 14, 15, 16);
var eveningTimes = new Array(17, 18, 19);
var nightTimes = new Array(20, 21, 22);
var lateTimes = new Array(23, 1, 2, 3, 4);


/*
 *ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
randomMessages[0] = [{charNo: 0, message: "さもです。", imgNo: 2},
                     {charNo: 2, message: "さくだ。", imgNo: 1},
                     {charNo: 1, message: "さのだよー。", imgNo: 1}];
randomMessages[1] = [{charNo: 0, message: "何かに似ている気がする？気のせいです。", imgNo: 1},
                     {charNo: 1, message: "気のせいだな！", imgNo: 2},
                     {charNo: 2, message: "気のせい気のせい。", imgNo: 2}];
randomMessages[2] = [{charNo: 1, message: "ブラウザに居座ることになるとは思わなかった。", imgNo: 1},
                     {charNo: 2, message: "ここは狭いね。", imgNo: 2},
                     {charNo: 1, message: "せめてデスクトップならな。", imgNo: 2},
                     {charNo: 2, message: "ねー。", imgNo: 2},
                     {charNo: 0, message: "……そんなこと言ってると消されるよ。", imgNo: 3}];

/*
 *早朝ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
earlyMessages[0] = [{charNo: 0, message: "早朝メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];

/*
 *午前ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
morningMessages[0] = [{charNo: 0, message: "午前メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];

/*
 *午後ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
afternoonMessages[0] = [{charNo: 0, message: "午後メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];

/*
 *夕方ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
eveningMessages[0] = [{charNo: 0, message: "夕方メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];

/*
 *夜ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
nightMessages[0] = [{charNo: 0, message: "夜メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];

/*
 *深夜ランダムメッセージ
 * 1会話単位に配列に保存します。
 * charNo: キャラクター番号（webcot-characters.jsのcharcters[]の配列番号と同じ値を設定します） 
 * message: ふきだしに表示するメッセージ
 * imgNo: 画像番号
 */
lateMessages[0] = [{charNo: 0, message: "深夜メッセージ", imgNo: 2},
                    {charNo: 2, message: "メッセージ。", imgNo: 1},
                    {charNo: 1, message: "メッセージ。", imgNo: 1}];
