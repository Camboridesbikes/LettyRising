import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Button from '../../components/Button/Button'

import styles from './index.scss';


interface Props {}

const Index = (props : Props) => {

    const Src = (url : string) => {
        return require(url);
    }

    return (
    <> 
    <BackgroundImage bgStyle={`${styles.splash}`} innerStyle={`${styles.inner}`} fluid={Src('C:/Users/hatte/Desktop/LettySite/LettyRising/src/pages/Index/splashImage.jpg')}>
        
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