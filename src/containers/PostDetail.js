import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'

import CreateCommentForm from './CreateCommentForm'
import EditPostForm from './EditPostForm'
import Comment from '../components/Comment'

import { deletePost } from '../actions/posts'
import { deleteComment } from '../actions/comments'
import { postCard, postImage} from '../styles';

const Timestamp = require('react-timestamp');

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
                <h3><a href={post.link} target="_blank">Link</a></h3>
                <h4>Posted: <Timestamp time={post.created_at} /></h4>
                <img
                  style = { postImage }
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
                {post.comments.length > 0 && <h4>Comments: </h4>}
                {post.comments.map(comment => (
                  <Comment
                    key={comment.id}
                    deleteComment={deleteComment}
                    postId={post.id}
                    comment={comment}
                  />
                ))}
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