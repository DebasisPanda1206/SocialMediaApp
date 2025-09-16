import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import styles from "./LayoutPage.module.css"

const LayoutPage = () => {
    return (
        <div className={styles.layoutcontainer}>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default LayoutPage