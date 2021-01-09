import React from 'react'

import BackgroundImage from '../../components/BackgroundImage/BackgroundImage'
import Button from '../../components/Button/Button'

// import './stock-photo-hands-holding-seedling-in-eggshells-montessori-education-csr-social-responsibility-eco-green-740429215.jpg' 

import styles from './connect.scss'

interface Props {
    
}


/**
 * TODO: make this contact form more module
 * 
 * TODO: add custom textarea and checkbox styles
 * 
 */

const Connect = (props: Props) => {
    return (
        <BackgroundImage bgStyle={styles.connect} innerStyle={styles.inner} fluid={require("./stock-photo-hands-holding-seedling-in-eggshells-montessori-education-csr-social-responsibility-eco-green-740429215.jpg")} objectPosition="50% 50%">
    {/* <div className='tc pg inner'> */}
      <div style={{padding: ``, color: `white`}}>
        <h1>Connect With Us</h1>
        <form name="contact" method="POST" style={{display: 'flex', maxWidth: '1000px', flexDirection: 'column', alignItems: 'center'}}>
          <p style={{display: `none`}}>
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </p>

          <div style={{margin: '1.5em 0'}}>
            <p>
              <label htmlFor="name">Name: <input className={styles.textInput} type="text" name='name' /></label>
            </p>
            <p>
              <label htmlFor="email">Email: <input className={styles.textInput} type="email" name='email' /></label>
            </p>
          </div>

          <h2>What Is Your Role?</h2>
          <div className={styles.role}
            style={{display: `flex`, justifyContent: `space-around`, flexWrap: `wrap`, width: '100%', marginBottom: '1em'}}>
            <p><label htmlFor="admin"> <input type="checkbox" name="admin" id="" /> Administrator </label></p>
            <p><label htmlFor="educator"> <input type="checkbox" name="educator" id="" /> Educator </label></p>
            <p><label htmlFor="parent"> <input type="checkbox" name="parent" id="" /> Parent </label></p>
          </div>
          <h2>What Are You Contacting Us About</h2>
          <div className={styles.about}>
            <p><label htmlFor="mentoring"> <input type="checkbox" name="mentoring" id="" /> Mentoring/Coaching </label>
            </p>
            <p><label htmlFor="leadership"> <input type="checkbox" name="leadership" id="" /> School Leadership </label>
            </p>
            <p><label htmlFor="profDev"> <input type="checkbox" name="profDev" id="" /> Professional Development
              </label></p>
            <p><label htmlFor="parentCoaching"> <input type="checkbox" name="parentCoaching" id="" /> Parent Coaching
              </label></p>
            <p><label htmlFor="schoolPackage"> <input type="checkbox" name="schoolPackage" id="" /> School Package
              </label></p>
          </div>
          <div className="more" style={{maxWidth: '800px'}}>
            <div style={{textAlign: 'left', margin: '1em'}}>
              <p>
                <label htmlFor="more">
                  <h2>Tell us more:</h2>
                </label>
              </p>
              <textarea className={styles.textAreaInput} name='more' rows={4} cols={60} /></div>
          </div>
            <Button type="submit">Submit</Button>
          </form>          
          
        </div>
      {/* </div> */}
    </BackgroundImage>
    )
}

export default Connect
