$("#city-name").keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode == "13") {
        fetchCurrentWeather();
        fetchFiveDayWeather();
    }
});

function fetchCurrentWeather() {
    var city = $('#city-name').val()
    var country = $('#country-id').val()
    $.ajax({
        type: "GET",
        url: "/apps/weather/api/v1/currentweather?q=" + city + "&countryid=" + country,
        contentType: "application/json",
        success: function (data) {
            if (Array.isArray(data) && data.length > 0) {

            }
            else {

            }
        },
        error: function (e) {
            alert("There is no data present for showing !!")
        }
    });
}

function fetchFiveDayWeather() {
    var city = $('#city-name').val()
    var country = $('#country-id').val()
    $.ajax({
        type: "GET",
        url: "/apps/weather/api/v1/currentweather?q=" + city + "&countryid=" + country,
        contentType: "application/json",
        success: function (data) {
            if (Array.isArray(data) && data.length > 0) {

            }
            else {

            }
        },
        error: function (e) {
            alert("There is no data present for showing !!")
        }
    });
}