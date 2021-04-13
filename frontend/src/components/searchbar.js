import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        
        return (
            <>
                <form className='searchBarForm' onSubmit={this.handleSubmit}>
                    <input className='searchBarInput' onChange={this.handleChange} name='video-search' type="text" placeholder="Search..."/>
                </form>
            </>
        )
    }
}
export default Searchbar;