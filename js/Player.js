class Player {
  constructor (){}


getCount(){
  // leia os dados e armazene o valor de playerCount
  var playerCountRef = database.ref ("playerCount");
  playerCountRef.on("value", function(data){
    playerCount = data.val();
  });
}

updateCount (count){
  database.ref ("/").update({
    playerCount: state
});
}
}
