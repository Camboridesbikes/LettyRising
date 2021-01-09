import React from 'react'
import {Link} from 'react-router-dom'

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Button from '../../components/Button/Button'
import {LinkCard, CardDeck} from '../../components/Cards/Cards'

import styles from './index.scss';


interface Props {}

const Index = (props : Props) => {
    return (
    <> 
    <BackgroundImage bgStyle={`${styles.splash}`} innerStyle={`${styles.inner}`} fluid={require('./imgs/splashImage.jpg')}>
        
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

    {/* NewsLetter Banner */}
  <div style={{ width: `100%`,position: `relative`,}}>
    <div style={{background: `#A7E084`,height: `.5rem`, textAlign: `center`, padding: `.25em`}}>
      {/* <p style={{margin: `0`}}>Sign up for the NewsLetter</p> */}
    </div>
  </div>

    {/* Who We are block */}
  <BackgroundImage bgStyle={`${styles.whoWeAre}`} innerStyle={`${styles.inner}`} fluid={require('./imgs/stock-photo-planting-young-tree-by-kid-hand-on-back-soil-as-care-and-save-wold-concept-302422220.jpg')}>
      <div style={{padding: `5%`, color: `white`}}>
        <h1>Who We Are</h1>
        <h3 style={{fontSize: '1.5em', lineHeight: `1.5em`, maxWidth: '1000px'}}>{'content.whoText'}</h3>
        <Button>
          <Link  to='/WhoWeAre'>Learn More</Link></Button>
    </div>
  </BackgroundImage>

  {/* block of cards */}
  {/**
  * TODO: change the conatining div into a cardBlck clas and manipulate in sass
  */}

    <CardDeck >
        <LinkCard fluid={require('./imgs/checkeredBoard.jpg')} title="Online Mentoring and Coaching" square/>
        <LinkCard fluid={require('./imgs/parentCoaching.jpg')} title="Online Mentoring and Coaching" square/>
        <LinkCard fluid={require('./imgs/profDevWorkshops.jpg')} title="Online Mentoring and Coaching" square/>
        <LinkCard fluid={require('./imgs/schoolLeadership.jpg')} title="Online Mentoring and Coaching" square/>
    </CardDeck>
    </>
)
}

export default Index