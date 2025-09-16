import React from 'react'
import styles from './ProfileCard.module.css'
import { currentUser } from '../data'

const ProfileCard = () => {
    return (
        <div className={styles.top_banner} >
            <div className={styles.profile_pic}>
                <img src={currentUser.prof_pic} alt={`profile pic of ${currentUser.userName}`}></img>
            </div>
            <div className={styles.right_details}>
                <div className={styles.up_details}>
                    <h2>{currentUser.userName}</h2>
                    <button><span>Edit</span> <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FFFFFF/pencil--v2.png" alt="pencil--v2" /></button>
                </div>
                <div className={styles.description}>
                    <p>{currentUser.user_desc}</p>
                </div>
                <div className={styles.user_insight}>
                    <div className={styles.insight}>
                        <h4>{currentUser.num_of_post}</h4>
                        <p>Posts</p>
                    </div>
                    <div className={styles.insight}>
                        <h4>{currentUser.num_of_followers}</h4>
                        <p>Followers</p>
                    </div>
                    <div className={styles.insight}>
                        <h4>{currentUser.num_of_following}</h4>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileCard