
$(document).ready(function () {
    $(".toHide").show();
    $(".showData").hide();

    $("#search").click(function () {
        let input = $(".input").val();
        let url = "https://ru.wikipedia.org/w/api.php?action=opensearch&limit=5&search=" + input + "&format=json&callback=?";
        //console.log(url);

        $.ajax({
            type: "GET",
            url: url,
            async: false,
            dataType: "json",
            success: function (data) {
                //console.log(data);
                $(".showData").show();
                $(".toHide").hide();
                $("#output").html("");
                for (var i = 0; i < data[1].length; i++) {
                    $("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
                }
            },
            error: function (errorMessage) {
                alert("Error");
            }
        });
    });
});