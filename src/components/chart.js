/**
 * Created by anjana on 15-08-2017.
 */
import _ from 'lodash';
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
function avg(data){
    return _.round(_.sum(data)/data.length);
}
export default (props)=>{
    return (
        <div>
        <Sparklines svgHeight={50} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div className="units">
            {avg(props.data)} {props.units}
        </div>
        </div>
    );
}