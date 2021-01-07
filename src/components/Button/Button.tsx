import React, { FunctionComponent } from 'react'

import styles from './button.scss'

interface Props {
    
}

const Button : FunctionComponent<Props> = ({children}) => {

    console.log(styles);

    return (
        <button className={`${styles.button}`}>
            {children}
        </button>
    )
}

export default Button