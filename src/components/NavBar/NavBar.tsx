import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './navbar.scss'


interface Props {
    
}

const NavBar = (props: Props) => {
    return (
       <header className={`${styles.main}`}>
           <div className={`${styles.navContainer}`}>

                <h2 className={styles.siteTitle}>
                    <NavLink to='/'>LettyRising</NavLink>
                </h2>
                <div className={styles.navbar} >
                <h4 className={styles.link}>
                    <NavLink to='/'>Home</NavLink>
                </h4>
                <h4 className={styles.link}>
                    <NavLink to=''>About Me</NavLink>
                </h4>
                <h4 className={styles.link}>
                    <NavLink to=''>What I Do</NavLink>
                </h4>
                <h4 className={styles.link}>
                    <NavLink to='/connect'>Connect</NavLink>
                </h4>
                </div>
                
           </div>
       </header>
    )
}

export default NavBar
