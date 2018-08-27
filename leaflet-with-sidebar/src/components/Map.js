import React, {Component} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import './map.css';

class Map extends Component {
    
    createMap(element) {
        var map = L.map(element, {layers: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })});

        map.zoomControl.setPosition('topright');
    
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
  