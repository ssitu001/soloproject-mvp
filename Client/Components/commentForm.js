import React, { Component } from 'react';
import { render } from 'react-dom';

//-CommentBox
    //-CommentList
        //-Comment
    //-CommentForm
const CommentBox = (props) => {

  var data = [
    {id: 3, author: "Brian", text: "Study session for Data Structures on Thurs 9/7 1pm"},
    {id: 1, author: "John", text: "I know OAuth, and can teach it"},
    {id: 2, author: "Bob", text: "Need help with React,state vs props"}
  ];

  return (
    <div className="commentBro">
      <h2>Notes</h2>
      <CommentList data={data}/>
      <CommentForm />
    </div>
  )
};

const CommentList = (props) => {

let comments = props.data.map( (comment) => {
  return (
      <Comment key={comment.id} author={comment.author} text={comment.text}/>
  )
})
//console.log(comments);
  return (
    <div className="commentList">
      {comments}
    </div>
  )
}      

const Comment = (props) => {
  return (
    <div className="comment">
      <h2 className="commentAuthor">
        {props.author}  says   {props.text}
      </h2>
    </div>
  )
} 

class CommentForm extends Component {
  constructor() {
    super()
    this.state = {
      "author": "", "text": ""
    };
  }

  handleAuthorChange(e) {
    this.setState({"author": e.target.value});
  }

  handleTextChange(e) {
    this.setState({"text": e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}

module.exports = CommentBox;