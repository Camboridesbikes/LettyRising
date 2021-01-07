import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'


import styles from './cards.scss'

interface CardProps {
    fluid? : string;
    title? : string;
    square? : boolean;
    Path? : string;

}

export const Card = (props: CardProps) => {
    return (
        <div>
            
        </div>
    )
}

export const LinkCard : FunctionComponent<CardProps> = ({fluid, title, square, Path}) => {
    return(
        <div className={`${styles.picCard}`} style={{backgroundImage: `url('${fluid}')`, /*padding: square ? '100%' : ''*/}}>
            <Link to={`/${Path}`}>
                <div>
                    <h1 className={`${styles.title}`}>{title}</h1>
                </div>
                
            </Link>           
        </div>
    )

}

interface DeckProps{
    Width? : string;
}

export const CardDeck : FunctionComponent<DeckProps> = ({Width, children, }) => {
    return (
        <div className={`${styles.CardDeck}`} style={{width: Width }}>
            {children}
        </div>
    )
}

