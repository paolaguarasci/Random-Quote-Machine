// TODO
// Animazione fadeIn
// Pulsante Tumblr non richiesto -.- (serve ApiKey u.u)

var $ = require('jquery');

function idRandom(max) {
  var min = 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nuovaCitazione () {
  $.getJSON("js/data.json", function(json) {
    var icon = '<i class="fa fa-quote-left fa-3x fa-pull-left coloreDinamico" aria-hidden="true"></i>';
    var cit = icon + '';
    var autore = '- ';
    var id = idRandom(10);
    var sfondo = idRandom(10);
    var twitter = 'http://www.twitter.com/intent/tweet?text=' + json[id].testo + ' (' + json[id].autore + ')';
    var tumblr = 'http://www.tumblr.com';

    cit += json[id].testo;
    autore += json[id].autore;

    $("#cit").html(cit).fadeIn("slow");
    $("#autore").html(autore).fadeIn("slow");
    $(".twitter").prop("href", twitter).fadeIn("slow");
    $(".tumblr").prop("href", tumblr).fadeIn("slow");
    $(".coloreDinamico").css("color", json[sfondo].colore );
    $("body").css("background-color", json[sfondo].colore );
  });
}

nuovaCitazione();
$(document).ready(function(){
  $( "#newCit" ).click(function() {
    nuovaCitazione();
  });
});
