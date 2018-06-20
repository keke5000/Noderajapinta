/*
HUOM EI TOIMI!

Kokeile yritys2.js tiedostoa tämän sijasta.


 */


var req = new XMLHttpRequest();

var lista = document.getElementById("lista");
var nappi = document.getElementById("napukka");

nappi.addEventListener("click", function () {
    console.log("Päästiin");
    if (req.readyState == 4) {
        console.log("Päästiin toka");
        if (req.status == 200) {
            console.log("Päästiin kolmas");


            var taulukko = req.responseText;
            console.dir(taulukko);
            for (var i = 0; i <taulukko.length; i++){
                lista.innerHTML += '<li>' + taulukko[i].name;
            }

        } else {
            alert("Something went wrong");
            console.log(req.status);
        }

    }

});
//
// function haekuvat(event) {
//     event.preventDefault();
//     var $tagi = $teksti.val();
//     $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',{
//         tags: $tagi,
//         tagmode: "any",
//         format: "json"
//     }).done(function (data) {
//         if(document.getElementById("tyhjennys").checked){
//             $body.empty();
//         }
//         $.each(data.items, function (i) {
//             var $imgdiv = $("<div>").addClass("imgdiv").appendTo($body);
//             $('<img>').attr("src", data.items[i].media.m).appendTo($imgdiv);
//         });
//     });
// }
// $("form").on("submit", haekuvat);

req.open('GET', 'http://localhost:3000/api/people/', true);
req.send(null);