import React, {useState} from "react";
import MyButton from '../UI/button/MyButton'

const PostItem = (props) => {
    const [activePost, setActivePost] = useState(false)

    const addActiveClass = () => {
        setActivePost(!activePost)
    }

    return (
        <li onClick={addActiveClass} className='blog__list-item'>
            <div className="blog__item-content">
                <strong className="blog__item-heading">{props.post.title}</strong>
                <div className="blog__item-descr">
                    {props.post.body}    
                </div>
            </div>
            <div className={activePost ? "active-post blog__item-btns" : "blog__item-btns"}>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </li>
    )
}

export default PostItem