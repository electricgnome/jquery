// deck_id: nwnkvfw7svem

var request = new XMLHttpRequest();
var data = '';
request.open('GET', 'https://deckofcardsapi.com/api/deck/nwnkvfw7svem/shuffle/', true);
deck()
draw_card()

$(document).ready(function () {

    $('#deal-button').click(function () {
        draw_card()
        setTimeout(deal_card('#dealer-card'), 300)
    })

    $('#hit-button').click(function () {
        draw_card()
        setTimeout(deal_card('#player-card'), 300)
    })
});

function deal_card(person) {
    console.log(person)
    $(person).append("<li> <img  alt='card' style='height: 195px' src=" + data.cards[0].image + ">")
}


function draw_card() {
    request.open('GET', 'https://deckofcardsapi.com/api/deck/nwnkvfw7svem/draw/?count=1', true);
    deck()
}


function deck() {
    request.onload = function () {
        data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data)
            return data;
        } else {
            console.log('error');
        }
    }
    request.send();
}
