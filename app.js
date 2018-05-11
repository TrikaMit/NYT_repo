// $(document).ready(function(){
    $("#searchbutton").on("click", function (event) {
        console.log("hit the button");
    var term = $("#searchterm").val();
    $("#searchterm").val("");
    console.log("term: " + term);
        event.preventDefault();
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "360b06b831504b2bb39cadc38c615e19",
            'q': term//,
            // 'begin_date': "19840101",
            // 'end_date': "19840101",
            // 'page': 5

        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result)
            console.log(result['response']['docs']);
            var results = result['response']["docs"];
            // var webURL = results[elements]["web_url"]);
            // var 
            for (elements in results){
                console.log("Url: " + results[elements]["web_url"]);
                console.log("Url: " + results[elements]["multimedia"][2].url);
                // console.log("Url: " + results[elements]["multimedia"][2].url);

            }

        }).fail(function (err) {
            throw err;
        });
    })
// });