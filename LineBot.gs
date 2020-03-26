const CHANNEL_ACCESS_TOKEN = "";//☆LINEのTOKEN
var reply_url = "https://api.line.me/v2/bot/message/reply";

function reply(text,reply_token){
  var params = {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method':'post',
      'payload':JSON.stringify({
        'replyToken':reply_token,
        'messages':[{
          'type':'text',
          'text':text,
        }],
        
      }),
    };
  UrlFetchApp.fetch(reply_url, params);
}

function doPost(e){
  
  var event = JSON.parse(e.postData.contents).events[0];
  var reply_token = event.replyToken;
  
  //グループ参加返信
  if(event.type=="join"){
    reply("Sorry! グループは未対応です",reply_token);
  }
  
  //メッセージ返信
  else if(event.type=="message"){
    //文章の場合
    if(event.message.type=="text"){
      var msg = "Hi! こんにちは"
      reply(msg,reply_token);
      
      //スタンプの場合
    }else if(event.message.type=="sticker"){
      var params = {
        'headers': {
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
        },
        'method':'post',
        'payload':JSON.stringify({
          'replyToken':reply_token,
          'messages':[{
            'type':'sticker',
            'stickerId':event.message.stickerId,
            'packageId':event.message.packageId,
          }],
          
        }),
      };
      UrlFetchApp.fetch(reply_url, params);
    }
    
  }
  else if(event.type == "follow"){
    newFriend(event.source.userId)
  }
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}