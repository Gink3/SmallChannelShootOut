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
    state = {
        query: 'Search...'
    };

    /* When the user types in the search bar */
    handleChange = (event) => {
        this.setState({
            query: event.target.value
        });
    };

    /* When the user submits the query */
    handleSubmit = event => {
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
