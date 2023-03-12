import React, {useState, useEffect, useMemo} from 'react';
import axios from 'axios';
import Hero from '../components/Hero/Hero';
import PostList from '../components/Posts/PostList';
import PostForm from '../components/Posts/PostForm'

import '../components/Posts/Posts.sass'
import Modal from '../components/UI/modal/Modal';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { getPageCount, getPagesArray } from '../components/Posts/posts';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [activeModal, setActiveModal] = useState(false)

    let pagesArray = getPagesArray(totalPages)
    let pagesCount = [
        {id: 0, count: 10},
        {id: 1, count: 15},
        {id: 2, count: 20},
    ]

    useEffect(() => {
        fetchPosts(limit, page)
    }, [limit, page])

    const searchedPosts = useMemo(() => {
        return posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
        // startsWith - если нужно искать по началу строки
    }, [searchQuery, posts])

    async function fetchPosts(limit, page) {
        setIsLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
        setIsLoading(false)
    }

    const changePage = (page) => {
        setPage(page)
    }

    const createPost = (newPost) => {
        setPosts([newPost, ...posts])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <main>
            <Hero
                title='Blog' 
                descr='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quaerat quae asperiores dolor voluptates recusandae neque? Perferendis saepe animi earum, voluptate dolor doloremque omnis sit, quaerat tempore, impedit eum ducimus.'
            />
            <section className='blog'>
                <div className="container blog__container">
                    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
                        <PostForm create={createPost} setActiveModal={setActiveModal}/>
                    </Modal>
                    <MyInput 
                        input='input dark'
                        placeholder='Search...' 
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <MyButton button='button dark' onClick={() => setActiveModal(true)}>Add post</MyButton>
                    <div className='blog__pages-wrapper'>
                        <div className="blog__count-list">
                                {pagesCount.map(p =>
                                    <span
                                        onClick={() => setLimit(p.count)}
                                        key={p.id}
                                        className={limit === p.count ? 'current-limit blog__count-item' : 'blog__count-item'}
                                    >
                                        {p.count}
                                    </span>    
                                )}
                        </div>
                        <div className='blog__pages-list'>
                            {pagesArray.map(p => 
                                <span 
                                    onClick={() => changePage(p)}
                                    key={p}
                                    className={page === p ? 'current-page blog__pages-item' : 'blog__pages-item'} 
                                >
                                    {p}
                                </span>    
                            )}
                        </div>
                    </div>
                    <PostList 
                        style={{flex: '1 1 100%'}}
                        isLoading={isLoading} 
                        posts={searchedPosts}
                        remove={removePost}
                    />
                </div>
            </section>
        </main>
    );
}

export default Blog;
