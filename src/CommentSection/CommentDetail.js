import React from "react";

class CommentDetail extends React.Component {
  render(props) {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src={this.props.avatar} alt="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              {this.props.author}
            </a>
            <div className="metadata">
              <span className="date">{this.props.timeAgo}</span>
            </div>
            <div className="text">{this.props.comment}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
