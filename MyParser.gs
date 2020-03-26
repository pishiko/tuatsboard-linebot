function myParse(tag1,tag2,text) {
  var index1 = text.indexOf(tag1)
  var index2 = text.indexOf(tag2)
  if(index1===-1 || tag1 === ''){
    index1 = 0
  }
  if(index2===-1 || tag2 === ''){
    index2 = text.length
  }
  return text.substring(index1+tag1.length,index2)
}
