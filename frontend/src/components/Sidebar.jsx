import React from 'react'
import styles from "./Sidebar.module.css"
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <img id={styles.full_logo} src='../static/logo (5).png' alt='logo-img'></img>
            <img id={styles.small_logo} src='../static/logo (3).png' alt='small-logo-img'></img>
            <div className={styles.nav_container}>
                <div className={styles.nav_elements}>
                    <Link to={"/"} className={styles.linktext}><img src='https://img.icons8.com/?size=100&id=1iF9PyJ2Thzo&format=png&color=FFFFFF' alt='home_logo'></img><span>Feed</span></Link>
                </div>
                <div className={styles.nav_elements}>
                    <Link to={"/message"} className={styles.linktext}><img src='https://img.icons8.com/?size=100&id=37966&format=png&color=FFFFFF' alt='message_icon'></img><span>Message</span></Link>
                </div>
                <div className={styles.nav_elements}>
                    <Link to={"/connections"} className={styles.linktext}><img src='https://img.icons8.com/?size=100&id=cykh8BZMTKkb&format=png&color=FFFFFF' alt='connections_logo'></img><span>Connections</span></Link>
                </div>
                <div className={styles.nav_elements}>
                    <Link to={"/discover"} className={styles.linktext}><img src='https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF' alt='discover_logo'></img><span>Discover</span></Link>
                </div>
                <div className={styles.nav_elements}>
                    <Link to={"/profile"} className={styles.linktext}><img src='https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=FFFFFF' alt='profile_logo'></img><span>Profile</span></Link>
                </div>
            </div>
            <span id={styles.version}>Version 1.0.0</span>
        </div>
    )
}

export default Sidebar