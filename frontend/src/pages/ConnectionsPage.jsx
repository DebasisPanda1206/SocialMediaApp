import { useState } from 'react';
import styles from './ConnectionsPage.module.css'; // assuming CSS Modules
import { connections } from '../data';

const ConnectionsPage = () => {
    const [activeTab, setActiveTab] = useState('followers');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.connections_container}>
            <h2>Your Connections</h2>
            <div className={styles.tab_bar}>
                <div className={styles.tab}>
                    <button
                        onClick={() => handleTabClick('followers')}
                        className={`${styles.tab_button} ${activeTab === 'followers' ? styles.active : ''}`}
                    >
                        Followers
                    </button>
                </div>
                <div className={styles.tab}>
                    <button
                        onClick={() => handleTabClick('following')}
                        className={`${styles.tab_button} ${activeTab === 'following' ? styles.active : ''}`}
                    >
                        Following
                    </button>
                </div>
            </div>
            <div className={styles.result_container}>
                <div className={styles.inner_box}>
                    {activeTab === 'followers' ? connections.followers.map(follower =>
                    (
                        <div className={styles.box} key={follower.userid}>
                            <div className={styles.profile_img}><img src={follower.profile_picture} alt={follower.name}></img></div>
                            <div className={styles.details}>
                                <p className={styles.name}>{follower.name}</p>
                                <p>Followed since {follower.followed_since}</p>
                            </div>
                            <div className={`${styles.buttons} ${styles.followers_button}`}>
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                    ) : connections.following.map(following =>
                    (
                        <div className={styles.box} key={following.userid}>
                            <div className={styles.profile_img}><img src={following.profile_picture} alt={following.name}></img></div>
                            <div className={styles.details}>
                                <p className={styles.name}>{following.name}</p>
                                <p>Following since {following.following_since}</p>
                            </div>
                            <div className={`${styles.buttons} ${styles.following_button}`}>
                                <button>Following</button>
                            </div>
                        </div>
                    )
                    )
                    }
                </div>
            </div>
        </div>
    );
};

export default ConnectionsPage;