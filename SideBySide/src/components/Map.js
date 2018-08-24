import React, {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-side-by-side';

import './map.css';

class Map extends Component {
    
    createMap(element) {
        /*var map = L.map(element, {layers: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })});*/

        var baseMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          zIndex:0
      });

        var map = L.map(element).setView([51.505, -0.09], 13);

        var wmsLayer1 = L.tileLayer.wms('https://openwms.statkart.no/skwms1/wms.vegnett', {
            layers: 'all',
            format: 'image/png',
            transparent: true,
            zIndex:3
          }).addTo(map);


          var wmsLayer2 = L.tileLayer.wms('https://wms.geonorge.no/skwms1/wms.historiskekart', {
            layers: 'amt1',
            format: 'image/png',
            transparent: true,
            zIndex:2
          }).addTo(map);

          /*var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
        }).addTo(map);
        var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design<\/a>, ' +
                '<a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0<\/a> &mdash; ' +
                'Map data {attribution.OpenStreetMap}',
            minZoom: 1,
            maxZoom: 16
        }).addTo(map)  */

        baseMap.addTo(map);
        L.control.sideBySide(wmsLayer1, wmsLayer2).addTo(map);
        
    
        return map;
      }

    shouldComponentUpdate(nextProps) {
        return true;
      }

    componentDidMount() {
        this.map = this.createMap('map');
        this.map.setView([63.428, 10.397], 13);
    }

    render() {
        return (
          <div>
          <div id='map' ref={el => (this._mapContainer = el)} />
          </div>);
        }
  }

  export default Map
  