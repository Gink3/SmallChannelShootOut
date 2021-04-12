import React from "react";
import "./base.scss";
import {fetchDataFromYoutube} from "../components/api.js";
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';
import {Home} from "../pages/home.js"
import {Video} from "../components/video.js";

var searchQuery;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        searchQuery = this.state.value;
        event.preventDefault();
        console.log(searchQuery);
    }

  
    render() {
      return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="search">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </div>
            </form>
        </div>
      );
    }
  }
export default SearchBar; 