/**
 * Created by anjana on 14-08-2017.
 */
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'
const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;