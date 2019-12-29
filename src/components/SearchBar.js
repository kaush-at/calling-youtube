import React from 'react';

class SearchBar extends React.Component{
    
    state= {term:''}

    inputChange = (event) =>{
        this.setState({term : event.target.value})
        
    }

    formSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit = {this.formSubmit}>
                    <div className="field">
                        <label>Search Videos</label>
                        <input type="text" placeholder="Search here"
                        value={this.state.term}  onChange={this.inputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;