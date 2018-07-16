$(document).ready(function () {
  //getWeather();
  // add a spinner icon to areas where data will be populated
  $('#condition').html('<i class="fa fa-spinner fa-pulse fa-3x"></i>');
  $('#wind-speed').html('<i class="fa fa-spinner fa-pulse fa-3x"></i>');
});

// Array for autocomplete cities and their weather stations
var cities = [];

// Get the weather from the Weather Underground API
function getWeather(weatherStation) {
  
  var callback = 'f8b9bda765abccdc/conditions',
      apiBaseUrl = 'https://api.wunderground.com/api/' + callback,
      backgroundImgUrl = 'https://tylermoeller.github.io/fccfe/local-weather-app/assets/img/';

  // Build the appropriate URL if a specific city's weather station was requested.
  if (!weatherStation) {
    weatherApi = apiBaseUrl + '/q/autoip.json';
  } else {
    weatherApi = apiBaseUrl + weatherStation + '.json';
  }

  // Call the API
  $.getJSON(weatherApi).done(function (json) {
    var weatherData = json.current_observation,
        locData = weatherData.display_location,
        condition = weatherData.weather,
        windSpeed = Number((weatherData.wind_mph * 0.86897624190816).toFixed(1)), //mph to knots
        windDir = weatherData.wind_dir;
 
    // Values for the convert button
    tempF = weatherData.temp_f,
    tempC = weatherData.temp_c;

    // If location has a value for "state", use it, otherwise use: city, country.
    if (locData.state !== '') {
      $('#city').text(locData.city + ', ' + locData.state + ', ' + locData.country_iso3166);
    } else {
      $('#city').text(locData.city + ', ' + locData.country_iso3166);
    }
     
    // categorize weather conditions to determine background image and icons
    switch (true) {
      case /thunderstorm|hail/i.test(condition):
        display = 'thunderstorm';
      break;
      case /drizzle|light rain/i.test(condition):
        display = 'sprinkle';
      break;
      case /rain|squalls|precipitation/i.test(condition):
        display = 'rain';
      break;
      case /snow|ice|freezing/i.test(condition):
        display = 'snow';
      break;
      case /overcast|mist|fog|smoke|haze|spray|sand|dust|ash/i.test(condition):
        display = 'fog';
      break;
      case /cloud/i.test(condition):
        display = 'cloudy';
      break;
      default:
        display = 'clear';
        if (!condition) condition = 'clear'; // handle undefined cases
      break;
    }

    // Update background, wind speed, and icons based on weather conditions
    $('body').css('background-image', 'url(' + backgroundImgUrl + display + '.jpg)');
    if (display === 'clear') {
      $('#condition').html('<i class="wi wi-night-' + display + '"></i><br><span class="description">' + condition + '</span>');
    } else {
      $('#condition').html('<i class="wi wi-' + display + '"></i><br><span class="description">' + condition + '</span>');
    }

    $('#wind-speed').html(
      '<i class="wi wi-wind wi-from-' + windDir.toLowerCase() + '"></i><br><span class="description">' +
      windDir + ' ' + windSpeed + ' knots</span>');

    //determine F or C based on country and add temperature to the page.
    var fahrenheit = ['US', 'BS', 'BZ', 'KY', 'PL'];
    if (fahrenheit.indexOf(locData.country_iso3166) > -1) {
      $('#temperature').text(tempF + '° F');
    } else {
      $('#temperature').text(tempC + '° C');
    }
    
  // Scroll to the top of the page and remove focus from the
  // search field to hide the keyboard on mobile
  scroll(0, 0);
  $('#search-field').blur();
      $.ajax({
        method: "POST",
        url: "insert.php",
        data: { 
            city : locData.city,
            state : locData.state,
            country:locData.country_iso3166,
            tempc : weatherData.temp_c,
            windspeed : Number((weatherData.wind_mph * 0.86897624190816).toFixed(1)), //mph to knots
            winddir : weatherData.wind_dir
         }
        })
        .done(function( msg ) {
            alert( "Data Saved: " + msg );
        });
         $.ajax({
        method: "POST",
        url: "weather_table.php",
        data: { 
            city : locData.city            
         }
        })
        .done(function( json ) {
            var jsons = JSON.parse(json);
            console.log(jsons[0].country);
           for(var i = 0; i < jsons.length; i++) {               
                var country = jsons[i].country;               
                console.log(country);
            }
            var table = document.createElement('table');
                table.setAttribute("id", "customers");
             var trth = document.createElement('tr');
             var th1 = document.createElement('th');
             var th2 = document.createElement('th');
             var th3 = document.createElement('th');
             var th4 = document.createElement('th');
             var th5 = document.createElement('th');
             var th6 = document.createElement('th');
             var th7 = document.createElement('th');
             var th8 = document.createElement('th');             
                 var textth1 = document.createTextNode('#');
            var textth2 = document.createTextNode('country');
            var textth3 = document.createTextNode('state');
            var textth4 = document.createTextNode('city');
            var textth5 = document.createTextNode('tempc');
            var textth6 = document.createTextNode('windspeed');
            var textth7 = document.createTextNode('winddir');
            var textth8 = document.createTextNode('created_at');

            th1.appendChild(textth1);
            th2.appendChild(textth2);
            th3.appendChild(textth3);
            th4.appendChild(textth4);
            th5.appendChild(textth5);
            th6.appendChild(textth6);
            th7.appendChild(textth7);
            th8.appendChild(textth8);          

            trth.appendChild(th1);
            trth.appendChild(th2);
            trth.appendChild(th3);
            trth.appendChild(th4);
            trth.appendChild(th5);
            trth.appendChild(th6);
            trth.appendChild(th7);
            trth.appendChild(th8);

            table.appendChild(trth);
         for(var i = 0; i < jsons.length; i++) {  
               var country = jsons[i].country; 
               var state = jsons[i].state; 
               var city = jsons[i].city; 
               var tempc = jsons[i].tempc; 
               var windspeed = jsons[i].windspeed; 
               var winddir = jsons[i].winddir;  
               var created_at = jsons[i].created_at;               
                console.log(country);
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
              var td3 = document.createElement('td');
            var td4 = document.createElement('td');
              var td5 = document.createElement('td');
            var td6 = document.createElement('td');
            var td7 = document.createElement('td');
            var td8 = document.createElement('td');

            var text1 = document.createTextNode(i+1);
            var text2 = document.createTextNode(country);
            var text3 = document.createTextNode(state);
            var text4 = document.createTextNode(city);
            var text5 = document.createTextNode(tempc);
            var text6 = document.createTextNode(windspeed);
            var text7 = document.createTextNode(winddir);
            var text8 = document.createTextNode(created_at);            

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6);
            td7.appendChild(text7);
            td8.appendChild(text8);

            tr.appendChild(td1);
            tr.appendChild(td2);
               tr.appendChild(td3);
            tr.appendChild(td4);
               tr.appendChild(td5);
            tr.appendChild(td6);
               tr.appendChild(td7);
            tr.appendChild(td8);

            table.appendChild(tr);
        }
        //document.body.appendChild(table);
         $('#table').html(table);
        });
  }).fail(function (err, json) {
    alert('There was an error retrieving your weather data. \n' +
          'Please try again later or try a different city.');
  });
}

$('#search-field').autocomplete({
  autoFocus: false,
  delay: 500,
  focus: function (event, ui) {
    $('#search-field').val(ui.item.value);
  },
  maxHeight: 100,
  minLength: 3,
  open: function () {
    // prevent the need for double-tap on mobile to select menu item
    $('.ui-autocomplete').off('menufocus hover mouseover');
  },
  select: function (event, ui) {
    getWeather(cities[cities.indexOf(ui.item.value) + 1]);
  },
  source: function(request, response) {
        var results = $.ui.autocomplete.filter(cities, request.term);

        response(results.slice(0, 10));
    },
})
.keyup(function (e) {
  var key = e.keyCode || e.which,
      cityAutoComplete = 'https://autocomplete.wunderground.com/aq?cb=?&query=' +
                        $('#search-field').val();

  // clear search field when user presses esc
  if (key === 27) $('#search-field').val('');

  // Update the autocomplete list when there are more than 2 characters and
  // the user enters a backspace, space, comma, period, or letter.
  if ($('#search-field').val().length > 2 &&
     (key === 8 | key === 32 | key === 44 | key === 46) |
     (key >= 65 && key <= 90) | (key >= 97 && key <= 122)) {

    cities.length = 0; // clear the array for a new list of cities

    // Push all autocomplete values to the cities array with their corresponding weather stations.
    // Limit to 20 non-duplicate entries. The API also allows searches for "snow", for example,
    // so we only allow values with a comma to show up in the autocomplete list.
    $.getJSON(cityAutoComplete).done(function (data) {
      $.each(data.RESULTS, function (i) {
          console.log(data.RESULTS[i]);
        var city = data.RESULTS[i].name;
        if (city.indexOf(',') > -1 && cities.indexOf(city) < 0)  {
          cities.push(city, data.RESULTS[i].l);
        }
      });
    })
    .fail(function (err) {
      console.log('Error: ' + JSON.stringify(err));
    });
  }
});

//toggle between celsius / fahrenheit
$('#convert-button').click(function () {
  this.blur(); // remove focus from the button after click
  if ($('#temperature').text().indexOf('F') > -1) {
    $('#temperature').text(tempC + '° C');
  } else {
    $('#temperature').text(tempF + '° F');
  }
});

$('#search-field').click(function () {
  $(this).val('');
  $('#search').autocomplete('close');
});
