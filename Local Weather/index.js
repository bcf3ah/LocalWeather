var city;
var country;
var bool;
var f;
var c;

$.getJSON("https://freegeoip.net/json/", function(response){
    city = response.city;
    country = response.country_code.toLowerCase();
    $("#location").text(city+", "+country.toUpperCase());
    $.getJSON("https://api.apixu.com/v1/current.json?key=ffc43fb70b7347a8965220731171005&q="+city, function(response){
      $("#condition").text(response.current.condition.text);
      $("img").attr("src", response.current.condition.icon);
      f = response.current.temp_f;
      c = response.current.temp_c;
      bool = true;
      $("#temp").text(f+" °F");
    });
});

$("#toggle").click(function(){
  if (bool){
    $("#temp").text(c+" °C");
    bool = !bool;
  } else {
    $("#temp").text(f+" °F");
    bool = !bool;
  }
})
