import { useState, useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import './Navigation.css'
import ButtonNavigation from '../../components/Buttons/ButtonNavigation/ButtonNavigation'
import { isDesktop, isMobile } from 'react-device-detect'
import InstagramIcon from '../../components/Icons/Instagram'
import HomeIcon from '../../components/Icons/Home'



export const navigationOptionsDesk = [
    // {text: <FormattedMessage id="navigation.text1" />, redirectTo: "#home"},
    {text: <FormattedMessage id="navigation.text2" />, redirectTo: "#fields"},
    {text: <FormattedMessage id="navigation.text3" />, redirectTo: "#about-us"},
    {text: <FormattedMessage id="navigation.text4" />, redirectTo: "#contact"},
]

export const navigationOptionsMobile = [
    // {text: <FormattedMessage id="navigation.text1" />, redirectTo: ""},
    {text: <FormattedMessage id="navigation.text4" />, redirectTo: "#contact"},
]

export default () => {
    
    const [isSticky, setSticky] = useState(false);

    const navigationRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            // Check if the floating navigation element exists
            if (navigationRef.current) {
                if (window.scrollY > (navigationRef.current.offsetTop)) { 
                    // Change the condition according to your requirements
                    setSticky(true);
                } else {
                    setSticky(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div ref={navigationRef}  className='navigation' >
            <div className={`navigation-floating ${isSticky ? 'sticky' : 'default'}`}>
                <div className='navigation-item home'>      
                    <a href='#' target="_blank">
                        <HomeIcon />
                    </a>
                </div>
                {isDesktop ? navigationOptionsDesk.map(({text, redirectTo}) => (
                    <div className='navigation-item'>
                        <ButtonNavigation text={text} redirectTo={redirectTo} />
                    </div>
                )) :  ''}                
                {isMobile ? navigationOptionsMobile.map(({text, redirectTo}) => (
                    <div className='navigation-item'>
                        <ButtonNavigation text={text} redirectTo={redirectTo} />
                    </div>
                )) :  ''}
                <div className='navigation-divider' />
                <div className='navigation-item'>      
                    <a href='https://www.instagram.com/exatas_consultoria_digital/' target="_blank">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </div>
        )
}