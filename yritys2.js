$(function () {
    var $body = $("#content");
    //var $teksti = $("#tag");

    function haetiedot(event) {
        //event.preventDefault();
        //var $tagi = $teksti.val();
        console.log("Päästiin 1");
        $.getJSON('http://localhost:3000/api/people/',{
            // name: "any",
            // tagmode: "any",
            // format: "json"
        }).done(function (data) {
                        for (var i = 0; i < data.length; i++) {
                            $('#lista').append('<li>' + data[i].email + '</li>');
                            console.log(data[i].name)
                        }
                    })

            // $.each(data, function () {
            //     var lista = $("<li>").appendTo($body);
            //      //$data.name.appendTo(lista);
            //     console.log(data.name);
            // });
    }
    $("#napukka").on("click", haetiedot);
});