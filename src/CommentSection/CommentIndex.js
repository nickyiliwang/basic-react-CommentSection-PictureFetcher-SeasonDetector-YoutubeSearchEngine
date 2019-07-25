import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

class CommentIndex extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.title()}
            timeAgo={"Date Posted:" + faker.date.past()}
            comment={faker.lorem.words() + " EYY LMAO"}
          />
        </ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={faker.name.firstName()}
          timeAgo={"Date Posted:" + faker.date.weekday()}
          comment={faker.lorem.sentence() + " OMGEGAROLL"}
        />
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Nunu"
          timeAgo={"Date Posted:" + faker.date.recent()}
          comment={faker.lorem.sentence()}
        />
      </div>
    );
  }
}

export default CommentIndex;
