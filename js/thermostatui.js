
$( document ).ready(function() {

  var thermostat = new Thermostat();
  var cityName, temp, wind, city;

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.COLOUR);
  }
  updateTemperature();

  $('#increase-temperature').click(function() {
    thermostat.upButton();
    updateTemperature();
  });

  $('#decrease-temperature').click(function() {
    thermostat.downButton();
    updateTemperature();
  });

  $('#reset-temperature').click(function() {
    thermostat.tempReset();
    updateTemperature();
  });

  $('#powerSavingButton').click(function() {
    thermostat.powerSavingButton();
    updateTemperature();
  });

  $('#select-city').on('submit', function( event ) {
    event.preventDefault();
    city = $(this).serialize() ;
    $.get('http://api.openweathermap.org/data/2.5/forecast/weather?' + city + '&APPID=ca6f6c4482e27abd7c68f8d5e303960f&units=metric', function(report){
      console.log(report);
      console.log(report.list[0].wind.speed);
      cityName = report.city.name;
      temp = report.list[0].main.temp;
      wind = report.list[0].wind.speed;
      $('#city-cityName').text(cityName);
      $('#city-temp').text(temp);
      $('#city-wind').text(wind);
    });
  });
});
