// TODO
//  - Colore di sfondo dinamico (random) inserito come proprietà dell'oggetto;
//  - Il cambio di colore avvine lentamente (fade in-out);
//  - Icone di tumblr e twitter e pulsante "Nuova citazione" dello stesso colore dello sfondo;

// --- PSEUDOCODE ---
// Parse del JSON
// Generazione di un numero casuale tra 1 e "lunghezza JSON"
// Cambio dinamico del colore dei pulsanti
// Cambio dinamico del colore dello sfondo
// Cambio dinamico del colore delle icona
// Trigger sul pulsante per generare una nuova citazione
// Pulsanti di condivisione che "inviano" la citazione
// Stampa dell'elemento con id X (generato casualmente)
var $ = require('jquery');
// jQuery.Color( "#229911" );
// jQuery.Color( "rgb(100,200,255)" );
// jQuery.Color( "rgba(100,200,255,0.5)" );
// jQuery.Color( "aqua" );
// $(".coloreDinamico").animate(({backgroundColor: jQuery.Color()}), 1500 );


// $("#newCit").click(function(){
//   $(".coloreDinamico").animate(({backgroundColor: jQuery.Color({ saturation: 50 })}), 1500 );
//
// });

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
    console.lod = (id);
    cit += json[id].testo;
    autore += json[id].autore;
    $("#cit").html(cit);
    $("#autore").html(autore);
  });
}
nuovaCitazione();

$( "#newCit" ).click(function() {
  nuovaCitazione();
});
