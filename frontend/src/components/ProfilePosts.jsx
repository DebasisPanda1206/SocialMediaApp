import React from 'react'
import { currentUser } from '../data'
import styles from './ProfilePosts.module.css'

const ProfilePosts = () => {
    return (
        <div className={styles.posts_grid}>
            {currentUser.user_posts.map(post => (
                <div key={post.post_id} className={styles.grid_item}>
                    <img src={post.img_path} alt={post.post_id}></img>
                </div>
            ))}
        </div>
    )
}

export default ProfilePosts