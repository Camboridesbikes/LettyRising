import React, {FunctionComponent} from 'react'

import styles from './BackgroundImage.scss'

interface Props {
    fluid : string;
    bgStyle? : string;
    innerStyle? : string;
    objectPosition?: string;
}

const BackgroundImage : FunctionComponent<Props> = ({fluid, bgStyle, innerStyle, objectPosition, children}) => {

   //how can I make this more modular? how can I decide the style for this component by passing a clasname? do I need to give up on using modules?

    return (
        <div className={`${styles.background} ${bgStyle}`} style={{backgroundImage: `url('${fluid}')`, objectPosition: `${objectPosition}`}} >
            <div className={`${styles.inner} ${innerStyle}`}>
            {children}
            </div>
            
        </div>
    )
}

export default BackgroundImage


