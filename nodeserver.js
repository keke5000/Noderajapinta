var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: true});
var router = express.Router();
var fs = require('fs');

router.route("/personnel").get(function (req, res) {
    res.json(people);
});

router.route("/personnel:id").get(function (req, res) {
    for (var person of people){
        if(person.id === req.params.id){
            res.json(people);
    }}).put(function(res, req){
        console.log("päästiin");
        var henkilo = req.body;
        henkilo.id = seuraavaid++;
        people.push(henkilo);
        res.setHeader("location", "http://localhost:3000/api/personnel/" + henkilo.id);
        res.sendStatus(201);
    });
    res.json("{msm error}");})
    .delete(function (req, res) {
        for(var person in people) { if (people[person].id === req.params.id){people.splice(person, 1);
    res.json("{msg: 'Personremoved'}");
    return; }}
    res.json("{'msg': 'Error, nosuchperson!'}");})




var people = [{"id": 0, name: 'JohnDoe', email: 'john.doe@party.org'},
    {"id": 2, name: 'JaneDoe', email: 'jane@company.fi'},
    {"id": 6, name: 'DonaldDuck', email: 'duckster@acme.com'},
    {"id": 1, name: 'MickeyMouse', email: 'mickey@acme.com'}];

app.use('/api', router);

// app.get('/api', function (req, res) {
//     console.log("JEEE1")
//     var taulukko = res.json(people);
//
//     for (var i = 0; i <taulukko.length; i++){
//         var palautaHaku = taulukko[i].name;
//         console.log(palautaHaku);
//     }
//
// });

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Listeningat http://%s:%s", host, port);
});
