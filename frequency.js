function countWords(str) {
  var arr = str.split(' ');
  var obj={};

for (var x=0; x<arr.length; x++){
  if(obj[arr[x]]===undefined){
    obj[arr[x]]=1;
  }
  else{
    obj[arr[x]]++;
  }
}
  return obj;
}

countWords('ask a bunch get a bunch');