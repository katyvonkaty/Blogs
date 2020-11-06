import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions"
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map( (post) => {
      return (
        <div className="item" key={post}>
          <i className="large middle aligned"> </i>
            <div className="content">
              <div className="description">
              <h1> {post.title}</h1>
              <p> {post.body}</p>
              </div>
              <UserHeader userId={post.userId} />
            </div>
        </div>
      )
    });
  }


  render() {
    console.log(this.props.posts);
    return <div className="ui relaxed divided list"> {this.renderList()} </div>
  }
}

const mapStateToProps = (state) => {
  return { posts:state.posts}
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)
