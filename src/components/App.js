import React from "react";
import Currenty from "./Currently";
import Warnings from "./Warnings";
import Daily from "./Daily";
import Call from "../apis/api";

class App extends React.Component {
  state = {
    forcastDate: {},
    lat: null,
    lng: null,
    errorMessage: null
  };

  componentDidMount() {
    //get latlng or backup
    /*window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
      err => this.setState({ errorMessage: err.message })
    );*/
    // call weather api?
  }
  render() {
    return (
      <div>
        <Warnings alerts={Call.alerts} />
        <Currenty currentWeather={Call} />
        <Daily data={Call.daily.data} />
      </div>
    );
  }
}

export default App;

/*function geoFindMe() {

  if (!navigator.geolocation) {
    googleGeo();
    return;
  }

  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    getLocation(latitude, longitude);
    getWeather(latitude, longitude)
  }

  function error() {
    googleGeo();
    console.log("Unable to retrieve your location");
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe();

function googleGeo() {
  var locAPI = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAQsv3Pppr4I0Pd7xfV9yUVyJzjqpK6qNU"
  // old: AIzaSyCV0lUcxVbZ2LF85MO3DspYeLGtP8msw5w
  //new: AIzaSyAQsv3Pppr4I0Pd7xfV9yUVyJzjqpK6qNU
  $.post(locAPI, function(loc) {

     
    getWeather(loc.location.lat, loc.location.lng);

     
    getLocation(loc.location.lat, loc.location.lng);
  });

}

function getLocation(lat, lng) {
  var latlng = lat + "," + lng
  var geoAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyAQsv3Pppr4I0Pd7xfV9yUVyJzjqpK6qNU"

  $.post(geoAPI, function(results) {
    for (var i = 0; i < results.results.length; i++) {
      var myAddress = results.results[1].formatted_address;

    }
    $("#city").html(myAddress)
  });  
}

//calling forecast.io API
function getWeather(lat, lng) { 
  var requestAPI = "https://api.forecast.io/forecast/beb63f8dd4ce3d42dbd2ecc39ec87354/" + lat + "," + lng;
  $.ajax({
    url: requestAPI,
    dataType: 'jsonp',
    success: function(results) {

      
      var tempC = ((tempF - 32) * (5 / 9)).toFixed(0);
     

      

*/
