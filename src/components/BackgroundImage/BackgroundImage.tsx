import React, {FunctionComponent} from 'react'

interface Props {
    fluid : string;
    className? : string;
}

const BackgroundImage : FunctionComponent<Props> = ({fluid, className, children}) => {
    return (
        <div className={`${className}`} style={{width: '100%', backgroundImage: `url('${fluid}')`, backgroundSize: 'cover', objectPosition: '50% 35%', position: 'absolute', backgroundRepeat: 'no-repeat'}} >
            {children}
        </div>
    )
}

export default BackgroundImage


