var result = getCurrentweather("incheon");
console.log(result);


var cityList = ["seoul", "incheon", "busan", "Gwangju", "jeju", "jeonju"];

$(".temp").each(function(i) {
    $(this).text(getCurrentTemp(cityList[i]) + "℃");
});

$(".location").on({
    "click": function() {
        var q = $(this).children(".q").attr("id");
        var redirectURL = "pages/weather_locatiion.html?q=" + q;
        location.href = redirectURL;
    }
});