import React, { useEffect, useRef, useState } from 'react'
import { users } from '../data'
import styles from './StoriesComponent.module.css'

const StoriesComponent = () => {
    const Slider = useRef();
    const [showLeft, setLeft] = useState(false);
    const [showRight, setRight] = useState(true);

    const checkScroll = () => {
        const eve = Slider.current;
        if (!eve) return;

        setLeft(eve.scrollLeft > 0);
        setRight(eve.scrollLeft + eve.clientWidth < eve.scrollWidth);
    }

    useEffect(() => {
        const eve = Slider.current;
        if (!eve) return;
        checkScroll(); // Initial check
        eve.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll); // Handle responsive changes

        return () => {
            eve.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };

    }, [])
    return (

        <div className={styles.storiesContainer}>
            {showLeft && <button className={`${styles.left} ${styles.slide_button}`} onClick={() => Slider.current.scrollBy({ left: -200, behavior: "smooth" })}><img src='https://img.icons8.com/?size=100&id=60591&format=png&color=FFFFFF' alt='left-button'></img></button>}
            <div className={styles.slider} ref={Slider}>
                {users.map((user, index) => (
                    <div key={index} className={styles.item}>
                        <img src={user.profile_picture} alt={user.Name} />
                    </div>
                ))}
            </div>
            {showRight && <button className={`${styles.right} ${styles.slide_button}`} onClick={() => Slider.current.scrollBy({ left: 200, behavior: "smooth" })}><img src='https://img.icons8.com/?size=100&id=37316&format=png&color=FFFFFF' alt='right-button'></img></button>}
        </div>
    )
}

export default StoriesComponent