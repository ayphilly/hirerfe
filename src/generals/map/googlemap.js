import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import "./googlemap.scss"
const mapStyles = {
  width: '100%',
  height: '100%',
//   flex: 1 
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  
        activeMarker: {}, 
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
        <div className="map-container">
            <Map
                resetBoundsOnResize={true}
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={
                    {
                        
                        lat:  6.59651 ,
                        lng: 3.34205
                    }
                }
            >
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Kenyatta International Convention Centre'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
                </InfoWindow>
            </Map>

        </div>
      
    );
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUKKnD6wpJJHyENK1BkYSqQgM2u9i-XOM'
})(MapContainer);