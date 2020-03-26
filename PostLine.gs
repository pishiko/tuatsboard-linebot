const LINE_TOKEN = ""//☆LINEトークン

function postLine(msg){
    var idList = getLineId()
    var url = "https://api.line.me/v2/bot/message/multicast"
    var token = LINE_TOKEN
    
    var params = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + token,
      },
      'method':'post',
      'payload':JSON.stringify({
        'to':idList,
        'messages':[{
          'type':'text',
          'text':msg,
        }],
        
      }),
    };
  Logger.log(idList)
    UrlFetchApp.fetch(url, params);
}

function main(){
  var boardList = getList()
  if(boardList.length > 0){
    for(var i=0;i<boardList.length;i++){
      var content = boardList[i]
      var msg = myParse('\n','',content[0])+'\n'+content[2]+'\n'+content[1]
      postLine(msg)
    }
  }
}

function sendmsg(){
  //postLine("ここ数日、SUPER AI NJのAIに不具合がありました。\n大変申し訳ございませんでした。")
}
