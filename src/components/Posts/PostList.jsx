import React from "react";
import PostItem from './PostItem'

const PostList = ({posts, isLoading, remove, ...props}) => {

    if(isLoading) {
        return(
            <h1 className="blog__posts-heading" {...props}>Loading...</h1>
        )
    } 

    if(!posts.length) {
        return(
            <h1 className="blog__posts-heading" {...props}>Posts not found</h1>
        )
    }
    
    return(
        <ul {...props} className="blog__posts-list">
            {posts.map((post) => 
                <PostItem 
                    remove={remove}
                    post={post} 
                    key={post.id}
                />
            )}
        </ul>
    )
    // activePost={activePost} setActivePost={setActivePost}
}

export default PostList;