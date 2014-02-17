//#####################################
// 逆丁PDF出力補助  ver.1.0
// PDF書き出しの範囲設定に逆順のノンブルを入れます
// 2014. 2. 17  ishii@kksanshusha.co.jp
//#####################################

var myDocument = app.activeDocument;

// 全ページのノンブルを取得し、逆転させる
var nombre = [];
for (i = 0; i < myDocument.pages.length; i++) {
    nombre.push(myDocument.pages[i].name);
    }
nombre.reverse();
var res = nombre.join(',');

// PDF書き出しの範囲設定を書き換える
with(app.pdfExportPreferences) {
    pageRange = res;
    }