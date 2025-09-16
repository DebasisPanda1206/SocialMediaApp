import React from 'react'
import styles from './ProfilePage.module.css'
import ProfileCard from '../components/ProfileCard'
import { Link, Outlet } from 'react-router-dom'

const ProfilePage = () => {
    return (
        <div className={styles.profile_page_container}>
            < ProfileCard />
            <div className={styles.control_container}>
                <div className={styles.control_box}>
                    <Link to={"/profile"}><img src='https://img.icons8.com/?size=100&id=s5aj8IKkzmO5&format=png&color=FFFFFF' alt='grid_icon'></img></Link>
                </div>
            </div>
            < Outlet />
        </div>
    )
}

export default ProfilePage