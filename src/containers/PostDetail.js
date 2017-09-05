import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import CreateCommentForm from './CreateCommentForm'
import EditPostForm from './EditPostForm'
import Comment from '../components/Comment'

import { deletePost } from '../actions/posts'
import { deleteComment } from '../actions/comments'

class PostDetail extends Component {
  findPost = postId => {
    return this.props.posts.find(post => {
      return post.id == postId
    })
  }

  render() {
    const { posts, deletePost, deleteComment, match, history } = this.props
    const { postId } = match.params
    const post = this.findPost(postId)
    return (
      <div>
        <Route path={`${match.url}/edit`} component={EditPostForm} />
        <Route
          exact
          path={match.url}
          render={() =>
            post ? (
              <div>
                <h2>{post.title}</h2>
                <hr />
                <h3>{post.link}</h3>
                <img
                  className="PostImage"
                  src={post.img_url}
                  alt={post.title}
                />
                <Link
                  to={{
                    pathname: `${match.url}/edit`,
                    state: { postId: post.id }
                  }}
                >
                  <button>Edit</button>
                </Link>
                <button onClick={() => deletePost(post.id, history)}>
                  Delete
                </button>
                {post.comments.map(comment => (
                  <Comment
                    key={comment.id}
                    deleteComment={deleteComment}
                    postId={post.id}
                    comment={comment}
                  />
                ))}
                {post.comments.length > 0 && <h4>Comments: </h4>}
                <CreateCommentForm postId={post.id} />
              </div>
            ) : (
              <p>Loading...</p>
            )}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { deletePost, deleteComment })(PostDetail);