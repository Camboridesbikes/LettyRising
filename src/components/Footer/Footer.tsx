import React, { FunctionComponent } from 'react'
import {Link} from 'react-router-dom'

import Button from '../Button/Button'

import styles from './footer.scss';

interface FooterProps {
    
}

export const Footer : FunctionComponent<FooterProps> = ({children}) => {
    return (
        <footer>
    <div className={styles.footer}>
        {children}
    </div>
</footer>
    )
}

interface NavProps {
title? : string;
}

export const Navigation : FunctionComponent<NavProps> = ({title, children}) => {
    return(
        <div className={`${styles.col_sm} ${styles.nav}`}>
            {title == undefined ? null : <Link to='/'><h3 >{title}</h3></Link>  }
            {children}
        </div>
    )
}

interface ContactProps {
email? : string;
phone? : string;
}

export const ContactInfo : FunctionComponent<ContactProps> = ({email, phone}) => {
    return(
        <div className={styles.col_sm}>
            <h3>Contact</h3>
            <p style={{margin: `0`}}>{email}</p>
            <p style={{margin: `0`}}>{phone}</p>
        </div>
    )
}


interface NewsProps {

}

export const Newsletter : FunctionComponent<NewsProps> = ({}) => {
    return(
        <div className={`${styles.col_lg} ${styles.newsletter}`}>
            <h3>Sign Up For Newsletter</h3>
            <form name="newsletter" >
                <div > 
                    <label htmlFor="name">Name: <input type="text" name='name' /></label>
                    <label htmlFor="email">Email: <input type="email" name='email' /></label>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}
