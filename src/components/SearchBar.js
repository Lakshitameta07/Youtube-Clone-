import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

 class SearchBar extends Component {
   state={
    searchTerm:'',
   }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    const {searchTerm} = this.state;
    const {onFormSubmit} = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  }

  render() {
    return (
      <Paper elevation={6} style={{Padding:'25px'}}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search" onChange={this.handleChange}/>
        </form>
      </Paper>
    )
  }
}
export default SearchBar;