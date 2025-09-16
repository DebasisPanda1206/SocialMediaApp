import React, { useState } from 'react'
import { posts } from '../data'
import styles from "./FeedComponent.module.css"

const FeedComponent = () => {
    const [likedPosts, setLikedPosts] = useState(() => {
        const initialLikes = {};
        posts.forEach((_, index) => {
            initialLikes[index] = false;
        });
        return initialLikes;
    });
    console.log(likedPosts)
    return (
        <div className={styles.feed_container}>
            {posts.map((post, index) => (
                <div key={index} className={styles.post_box}>
                    <div className={styles.upper_banner}>
                        <div className={styles.profile_pic}><img src={post.profile_picture} alt={post.userName}></img></div>
                        <div className={styles.post_head}>
                            <h3>{post.userName}</h3>
                            <p>{post.place}</p>
                        </div>
                    </div>
                    <div className={styles.post_picture}>
                        <img src={post.post_picture} alt='post'></img>
                    </div>
                    <div className={styles.insights_banner}>
                        <img width="25" height="25" src={likedPosts[index] ? "https://img.icons8.com/material/24/FF0000/filled-like--v1.png" : "https://img.icons8.com/material/24/FFFFFF/filled-like--v1.png"} alt="filled-like--v1" onClick={() => {
                            setLikedPosts(prev => ({
                                ...prev,
                                [index]: !prev[index]
                            }));
                        }} />
                        <img width="25" height="25" src='https://img.icons8.com/?size=100&id=143&format=png&color=FFFFFF' alt='comment-icon'></img>
                        <img width="25" height="25" src='https://img.icons8.com/?size=100&id=2837&format=png&color=FFFFFF' alt='share-icon'></img>
                    </div>
                    <div className={styles.content_banner}>
                        <p><span>{post.userName} </span>{post.content}</p>
                        <p>{post.timestamp}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FeedComponent