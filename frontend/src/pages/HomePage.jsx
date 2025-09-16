import React from 'react'
import styles from "./HomePage.module.css"
import StoriesComponent from '../components/StoriesComponent'

import FeedComponent from '../components/FeedComponent'




const HomePage = () => {

    return (
        <div className={styles.home_container}>
            <StoriesComponent />
            <FeedComponent />
        </div>
    )
}

export default HomePage