// deck_id: nwnkvfw7svem

var request = new XMLHttpRequest();
var data = "";
var pile="pile/'+person+'/add/?cards='+ data.cards[0].code"
var card = "draw/?count=1";
var shuffle = "shuffle/?deck_count=1";
var player_pile = [];
var dealer_pile = [];

$(document).ready(function() {
  deck(shuffle);

  $("#deal-button").click(function() {
    deck(card);
    setTimeout(deal_card("#dealer-card"), 3000);
  });

  $("#hit-button").click(function() {
    deck(card);
    setTimeout(deal_card("#player-card"), 300);
  });

  $("#stand-button").click(function() {
   
  });

  function deal_card(person) {
    console.log(person);
    $(person).append(
      "<li> <img  alt='card' style='height: 195px' src=" +
        data.cards[0].image +
        ">"
    );

    
    deck(pile)
  }

  function deck(act) {
    request.open(
      "GET",
      "https://deckofcardsapi.com/api/deck/nwnkvfw7svem/" + act,
      false
    );

    request.onload = function() {
      data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        console.log(data);
      } else {
        console.log("error");
      }
    };
    request.send();
  }
});
