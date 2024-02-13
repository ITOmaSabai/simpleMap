import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';


<div id='map'></div>

{/* <style>
#map {
  height: 80vh;
  width: 90vw;
  margin-bottom: 20px;
}
</style> */}

function initMap(){
  geocoder = new google.maps.Geocoder()

  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.1293, lng: 138.7559},
    zoom: 2,
  });

  // <% if @maps.present? %>
  //   <% @maps.each do |map| %>
  //     <% if map.lat.present? && map.lng.present? %>
        (function() {
          let markerLatLng = { lat: <%= map.lat %>, lng: <%= map.lng %> };
          let marker = new google.maps.Marker({
            position: markerLatLng,
            map: map
          });

          let infowindow = new google.maps.InfoWindow({
            position: markerLatLng,
            content: "<a href='<%= map_path(map) %>' target='_blank' ><%= map.text %></a>"
          });
          
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        })();
  //     <% end %>
  //   <% end %>
  // <% end %>
}
let geocoder;
const display = document.getElementById('display')

function codeAddress(){
  let inputAddress = document.getElementById('address').value;

  geocoder.geocode( { 'address': inputAddress}, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      let marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
      display.textContent = "検索結果：" + results[ 0 ].geometry.location
    } else {
      alert('該当する結果がありませんでした：' + status);
    }
  });   
}
<script src="https://maps.googleapis.com/maps/api/js?key=<%= ENV['GOOGLE_MAP_API_KEY'] %>&callback=initMap" async defer></script>