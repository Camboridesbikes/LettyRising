import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Button from '../../components/Button/Button'

import styles from './index.scss';


interface Props {}

const Index = (props : Props) => {
    return (
    <> 
    <BackgroundImage bgStyle={`${styles.splash}`} innerStyle={`${styles.inner}`} fluid="https://via.placeholder.com/500.png">
        
            <div>
                <h1>Welcome to Applied Montessori</h1>
                <h3>
                    {`content.splashText`}
                </h3>
                <Button>
                    <Link to='/Connect'>Connect with us</Link>
                </Button>
            </div>
       
    </BackgroundImage> 
    </>
)
}

export default Index