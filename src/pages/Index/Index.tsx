import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'

interface Props {}

const Index = (props : Props) => {
    return (
    <> 
    <BackgroundImage className="splash" fluid="https://via.placeholder.com/500.png">
        <div className="inner">
            <div>
                <h1>Welcome to Applied Montessori</h1>
                <h3>
                    {`content.splashText`}
                </h3>
                <button className="button">
                    <Link to='/Connect'>Connect with us</Link>
                </button>
            </div>
        </div>
    </BackgroundImage> 
    </>
)
}

export default Index