import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const PostForm = ({create, setActiveModal}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        if(post.title.length < 10 || post.body.length < 10) {
            alert(`
                Completing required fields!
                Title min length 7
                Body min length 10
            `)
        } else {
            create(newPost)
            setPost({title: '', body: ''})
            setActiveModal(false)
        }
    }

    return (
        <form>
            <h2 style={{fontSize: '25px', color: '#5C2000', textAlign: 'center', marginBottom: '20px'}}>Add new post</h2>
            <MyInput 
                input='dark'
                style={{marginBottom: '20px'}}
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value,})}
                type="text" 
                placeholder="Post title"/>
            <MyInput
                input='dark'
                style={{marginBottom: '20px'}}
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value,})}
                type="text" 
                placeholder="Post description"/>
            <MyButton button='dark' onClick={addPost}>Create post</MyButton>
        </form>
    );
}

export default PostForm;