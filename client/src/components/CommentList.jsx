var React = require('react');
var Comment = require('./Comment.jsx');

var CommentList = React.createClass({
  render:function (){
// Making the components from the Array using map
    var commentComponents = this.props.comments.map(function (commentObject){
      return(<Comment author={commentObject.author} key={commentObject.id}>
        {commentObject.text}
      </Comment>)
    });

// Displaying the contents of the Array 
    return (
      <div className='comment-list'>
        {commentComponents}
        
      </div>
      )
  }
});

module.exports = CommentList;