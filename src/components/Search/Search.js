/** Component with the top toolbar (includes searchbar, logo, and icons) 
 *  When user searches for a word (the input must be a single word), uses 
 *  the Suggestions component to return a wordcloud
*/
import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from '../Suggestions/Suggestions'
import "./Search.css"
import { IoNotificationsOutline, IoSettings, IoPersonSharp } from "react-icons/io5";


//styling for icons in the top bar
const style = { fontSize:"2.5em", color: "#909090", marginRight: "10px" }

class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
      suggestions: [],
    };
}
  



getInfo = async (word) => {
  
  try {
    // send request to the WordsAPI
    const response = await axios({
      "method":"GET",
      "url":`https://wordsapiv1.p.rapidapi.com/words/${word}/hasTypes`,
      "headers":{
      "content-type":"application/json",
      "x-rapidapi-host":"wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key":"02df4fb51bmsh702ed367223bfccp13c6d8jsnf367d77b2d56"
      }
    })
    if (response.data.hasTypes.length > 0) {
      this.setState({suggestions: response.data.hasTypes});
    }
    //if there is not result, alert 
    else {
      alert("No search result found")
 
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  } catch (err) {
    console.log(err)
    alert("No search result found")
    return { statusCode: 500, body: err.toString() }
  }
    
};

//set suggestions when user hits enter or press the search button
//check that the input is in a correct form (non-empty, single word)
setSuggestions = () => {
  if (this.state.query && this.state.query.length >= 1 && !this.state.query.includes(' ')) {
    console.log(this.state.query);
    this.getInfo(this.state.query)
  } 
  //if the input includes space (multiple words), alert
  else if (this.state.query.includes(' ')){
    alert("Please type in one word!")
  }

}

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })  
  }

//handle Enter key
onKeyUp(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    this.setSuggestions();
  }
}

//handle "search" button click
onClick = () => {
  this.setSuggestions();
  
}

  render() {
    return (
      <div>
        <div className="topBar"> 
        <div className="leftBar"> 
        <img src="shoulder_tap_logo.png"  id="logo" />
         <input
          id="searchBar"
          type="text"
          placeholder="Searched query"
          ref={input => this.search = input}
          onChange = {this.handleInputChange}
          onKeyUp={event => this.onKeyUp(event)}
        />
        <button height= "30px" id="searchButton" onClick={this.onClick}>Search</button>
        </div>
        <div className="toolBar">
          <IoSettings style={style}/>
          <IoNotificationsOutline style={style}/>
          <IoPersonSharp style={style}/>
        </div>
           
        </div>
        <div className="container">
          <div className="wordCloud">
            <Suggestions results={this.state.suggestions} />
          </div>
        </div>
      </div>
       
    )
  }
}

export default Search