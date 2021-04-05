import React from "react";
import "./base.scss";

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
        this.props.handleFormSubmit(this.state.query);
    }

    render(){
        return(
            <div className="container nav">
                <form onSubmit={this.handleSubmit}>
                    <div className="search">
                        <input onChange={this.handleChange} name='video-search' type="text" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar; 