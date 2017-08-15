/**
 * Created by anjana on 15-08-2017.
 */
/*global google*/
import React, {Component} from 'react';

export default class GoogleMap extends Component {
    componentDidMount(){
        console.log(this.props.lat +" "+ this.props.lon);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
        console.log("blah")
    }
    render(){
        return <div ref="map"/>;
    }
}