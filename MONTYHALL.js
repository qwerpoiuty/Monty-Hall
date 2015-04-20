function montyHall(bool){
  var guess = 0
  //gonna be lazy and not change the door each time this door is real
  var door = Math.floor((Math.random() * 3)+1)

  //2 conditions to check for stats
  if (bool === true){
    for (var i = 0; i < 1000; i++){
        //need to pick a door
        var pick = Math.floor((Math.random() * 3)+1)
        //possible outcomes
        if (door === pick){continue;}
        //switch doors
        else {guess += 1}
    }
  }
  if (bool === false){
    for (var i = 0; i < 1000; i++){
      //just pick a door and print if its right or not
      var pick = Math.floor((Math.random() * 3)+1)
      if (door === pick){guess+=1}
    }
  }
  return guess/1000 + "% correct"
}
