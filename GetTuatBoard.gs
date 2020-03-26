const BOARD_TOKEN = "" //☆base64 TUATBoard PASS
const DOCUMENT_ID = "" //☆google ドキュメントのID
const GRADE_PHRASES = ["3年","３年","学部3","学部３"] // GRADEとCATEGORYの要素数が同じじゃないと動かない(めんどくさがり)
const CATEGORY_PHRASES =  ["EDENからのお知らせ","S科事務室","S科事務室より","月ノ美兎"]

function getHtml() {
  var year = String(getYear());
  
  var url = "https://board.cs.tuat.ac.jp/"+year+"/boards/new.html"
  var params = {
  'headers' : {
    'Authorization': 'Basic '+BOARD_TOKEN
    }
  }
  var res = UrlFetchApp.fetch(url, params)
  var html = res.getContentText('SHIFT-JIS')
  return html
}

function getList(){
  var list = []
  var retList = []
  var doc = DocumentApp.openById(DOCUMENT_ID)
  var head = doc.getBody().getText()
  var html = getHtml()
  if(html.indexOf(head)===-1){
    html = myParse('</H3>','',html)
      doc.getBody().setText(myParse('','<BR>',html)+'<BR>')
      return
      }
  html = myParse('</H3>',head,html)
  if(html.indexOf('</A>')!==-1){
    doc.getBody().setText(myParse('','<BR>',html)+'<BR>')
    while(html.indexOf('</A><BR>')!==-1){
      var miniList = []
      var table = myParse('','</A>',html)
      miniList.push(myParse('','<A',table))
      miniList.push('https://board.cs.tuat.ac.jp'+myParse('A HREF="','" TARGET=',table))
      miniList.push(myParse('"article">','</A>',table))
      html = myParse(table+'</A><BR>','',html)
      list.push(miniList)
      }
    var wordList = GRADE_PHRASES
    var wordList2 = CATEGORY_PHRASES
    for(var i=0;i<list.length;i++){
      for(var j=0;j<wordList.length;j++){
        if(list[i][2].indexOf(wordList[j])!== -1 || list[i][0].indexOf(wordList2[j])!==-1){
          var l = []
          l.push(list[i])
          retList.push(list[i])
          break
        }
      }
    }
    }
  Logger.log(retList)
  return retList
  }

function getYear(){
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  if(month+1 < 4){
    year-=1;
  }
  //Logger.log(String(year));
  return year;
}