$(function () {
    var count = 0;
    $("#next").click(function () {
        if (count === 0) {
            $("#info").slideUp(300);
            $("#info").style = "display:none";
            setTimeout(function () {
                $("#ability").style = "";
                $("#ability").slideDown(300);
            }, 300)
            count++;
        } else if (count === 1) {
            $("#ability").slideUp(300);
            $("#ability").style = "display:none";
            setTimeout(function () {
                $("#department").style = "";
                $("#department").slideDown(300);
            }, 300)
            count++;
        } else if (count === 2) {
            $("#department").slideUp(300);
            $("#department").style = "display:none";
            setTimeout(function () {
                $("#result").style = "";
                $("#result").slideDown(300);
            }, 300)
            count++;
        } else if (count === 3) {
            count = 0;
            $("#result").slideUp(300);
            $("#result").style = "display:none";
            setTimeout(function () {
                $("#info").style = "";
                $("#info").slideDown(300);
            }, 300)
        }

    });
});
