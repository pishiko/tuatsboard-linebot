const SPREADSHEET_ID = ""//☆google スプレッドシートのID

function searchData(array,id){
  return array.some(function(arrays,i,data){
             return (arrays[0]===id)
             })
}

function newFriend(id){
  var spsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  var sheet = spsheet.getActiveSheet()
  var last = sheet.getLastRow()
  var values = sheet.getRange(2,1,last-1,2).getValues()
  
  if(!searchData(values,id)){
    sheet.appendRow([
      id,"1"
    ])
  }
  
}

function getLineId(){
  var spsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  var sheet = spsheet.getActiveSheet()
  var last = sheet.getLastRow()
  var values = sheet.getRange(2,1,last-1,2).getValues()
  
  var rlist = []
  for(var i=0;i<values.length;i++){
    rlist.push(values[i][0])
  }

  return rlist
}

function getDebugLineId(){
  var spsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  var sheet = spsheet.getActiveSheet()
  var last = sheet.getLastRow()
  var values = sheet.getRange(2,1,2,2).getValues()
  
  var rlist = []
  for(var i=0;i<values.length;i++){
    rlist.push(values[i][0])
  }
  Logger.log(rlist)
  return rlist
}
