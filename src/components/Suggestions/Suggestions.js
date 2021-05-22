/** Component to return a wordcloud 
 *  Takes results as props and maps each word as a button
 *  The wordcloud is a fixed in size. If there is overflow,
 *  it will have a scroll bar
 *  When a button is clicked, the button will change color and go on top
 */
import React,  { Component } from 'react'
import "./Suggestions.css"


class Suggestions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      index: '',
      results: this.props.results

    };
}

 onClick= ev => {
   console.log(ev);
  this.setState({
    // Retrieve a passed parameter 'value' attribute
    selected: `${ev.target.outerText}`
  });
  console.log(this.state.selected)
 }

 selected = () => {
   if (this.state.selected !== '') {
    const word = this.state.selected;
    return <button className="chosen">{word}</button>
   }
 }

 options = () => {
  const { results } = this.props;
  const options = results.map((r,index) => (
    <button className="words" key={index} id={index} value={r} onClick={this.onClick}>
    {r}
  </button> ))
  return options;
 }

render() {
  
   return  (
     <div className="total">
          <div className="selected">
       {this.selected()}
      </div>
      <div className="wordBlock">
      {this.options()}
      </div>
     </div>
     
   )
  
}
}
 
export default Suggestions
