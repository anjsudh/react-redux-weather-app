/**
 * Created by anjana on 14-08-2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="pure-form">
                <fieldset>
                    <input
                        placeholder="City"
                        className="pure-input-rounded"
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    <button type="submit" className="pure-button pure-button-primary">Get Forecast!</button>
                </fieldset>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);