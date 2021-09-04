import Avatar from 'antd/lib/avatar/avatar'
import React from 'react';
import './Comment.css'

const Comment = (props) => {
    return (
        <div className="comment">
            <Avatar src="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=259&q=80"/>
            <div className="comment-text">
                <h5>Rohit Vernekar</h5>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment;
