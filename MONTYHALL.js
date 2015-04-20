function montyHall(bool){
  var guess = 0
  var door = Math.floor((Math.random()*3)+1)
  for (var i = 0; i <1000; i++){
  var pick = Math.floor((Math.random() *3)+1)
    if (bool === true){
      if (door === pick){continue}
      else{guess +=1}}
    else if(door === pick){guess +=1}

  }
  return guess/1000}
