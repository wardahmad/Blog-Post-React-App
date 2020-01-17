import React, {Component} from 'react';
import './App.css';

// Load in Comment component
import Comment from './Comment.js';
import Author from './Author.js';
// define our Hello component
class Post extends Component {

  constructor (props) {
    super()
    this.state = {
     body: props.state// initialize this.state.moodPoints to be 1
   };
 }

 changeBody(e){
   this.setState({
     body: prompt("add")
   })
 }

 onchangeBody(e){
   this.setState({
     body: e.target.value
   })
 }

  render () {
    const allComments =[
      <Comment body={this.props.comments[0]}/>,
      <Comment body={this.props.comments[1]}/>,
      <Comment body={this.props.comments[2]}/>
    ]

    const allAuthors=[
      <Author authorArr={this.props.author[0]}/>,
      <Author authorArr={this.props.author[1]}/>,
      <Author authorArr={this.props.author[2]}/>
    ]


    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By : {allAuthors}</p>


        <p>{this.state.body}</p>
        <button onClick={(e) => this.changeBody(e)}>change</button>
        <input onChange={(e) => this.onchangeBody(e)}></input>


        <h3>Commnts:</h3>
        {allComments}
        

      </div>
    );
  }
}
export default Post;
