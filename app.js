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
            var list = $("<ul>");
            list.addClass("list-group");
            for (elements in results){
                console.log("Url: " + results[elements]["web_url"]);
                console.log("Url: " + results[elements]["multimedia"][2].url);
                console.log("Headline: "+ results[elements].headline.main);
                // console.log("Url: " + results[elements]["multimedia"][2].url);
                var listItem = $("<li>");
                listItem.addClass("list-group-item");
                var listItemHTMLString = "<b>" +results[elements].headline.main+ "</b><br>";
                var linkToArt = $("<a>")
                linkToArt.attr("href", + results[elements]["web_url"]);
                linkToArt.text("Link to the Article: " + results[elements]["web_url"]);
                console.log("listItemHTMLString: " + listItemHTMLString)
                listItem.html(listItemHTMLString)
                var artImage= $("<img>");
                var artImageSrcString = "https://www.nytimes.com/"+results[elements]["multimedia"][2].url;
                artImage.attr("src", artImageSrcString);
                artImage.appendTo(listItem);
                linkToArt.appendTo(listItem);
                listItem.appendTo(list);

            }
            ($("#resultsarea").append(list));
        }).fail(function (err) {
            throw err;
        });
    })
// });