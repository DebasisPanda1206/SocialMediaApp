import React, { useState } from 'react'
import styles from './DiscoverPage.module.css'
import { users } from '../data'

const DiscoverPage = () => {
    const [searchValue, setSearchValue] = useState('')

    const ClearInputField = () => {
        setSearchValue('')
    }

    return (
        <div className={styles.discover_page_container}>
            <h2>Discover New People</h2>
            <div className={styles.search_bar}>
                <div><img src='https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF' alt='search_icon'></img></div>
                <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                <div><img style={{ display: searchValue ? 'inherit' : 'none' }} id={styles.cross_logo} src='https://img.icons8.com/?size=100&id=79023&format=png&color=FFFFFF' alt='cross_logo' onClick={ClearInputField}></img></div>
            </div>
            <div style={{ display: searchValue ? 'inherit' : 'none' }} className={styles.suggest_container}>
                <div className={styles.suggest_component}>
                    {users.map(user => (
                        <div className={styles.userbox}>
                            <div><img src={user.profile_picture}></img></div>
                            <div className={styles.user_detail}>
                                <p>{user.Name}</p>
                                <p>username</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DiscoverPage