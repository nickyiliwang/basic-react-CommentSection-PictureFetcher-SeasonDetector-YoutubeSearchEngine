import React from "react";

class ApprovalCard extends React.Component {
  render() {
    return (
      <div className="ui card">
        <div className="content"> This Comment:</div>
        {this.props.children}
        <div className="content">
          Appears to be spam! Do you approve its validity?
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
