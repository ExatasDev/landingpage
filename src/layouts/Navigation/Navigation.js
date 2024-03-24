import { useState, useEffect, useRef } from 'react'
import { FormattedMessage } from 'react-intl'
import './Navigation.css'
import ButtonNavigation from '../../components/Buttons/ButtonNavigation/ButtonNavigation'
import { isDesktop, isMobile } from 'react-device-detect'
import InstagramIcon from '../../components/Icons/Instagram'
import HomeIcon from '../../components/Icons/Home'



export const navigationOptionsDesk = [
    // {text: <FormattedMessage id="navigation.text1" />, redirectTo: "#home"},
    {id:"home"},
    {id:"services",text: <FormattedMessage id="navigation.text2" />, redirectTo: "#services"},
    {id:"aboutus",text: <FormattedMessage id="navigation.text3" />, redirectTo: "#about-us"},
    {id:"contact",text: <FormattedMessage id="navigation.text4" />, redirectTo: "#contact"},
]

export const navigationOptionsMobile = [
    {id:"services", text: <FormattedMessage id="navigation.text2" />, redirectTo: "#service"},
    {id:"home"},
    {id:"contact", text: <FormattedMessage id="navigation.text4" />, redirectTo: "#contact"},
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

    const renderList = () =>{
        let list = isDesktop ? navigationOptionsDesk : navigationOptionsMobile;
        return list.map(({id,text, redirectTo}) => {
            if(id == 'home') {
                return ( 
                <div className='navigation-item home'>      
                    <a href='#' target="_blank">
                        <HomeIcon />
                    </a>
                </div>
                )
            }else{
                return (
                    <div className='navigation-item'>
                        <ButtonNavigation text={text} redirectTo={redirectTo} />
                    </div>
                )
            }
        })
    }

    return (
        <div ref={navigationRef}  className='navigation' >
            <div className={`navigation-floating ${isSticky ? 'sticky' : 'default'}`}>
               
                {renderList()}
                {isDesktop && (
                    <>
                    <div className='navigation-divider' />
                    <div className='navigation-item'>      
                        <a href='https://www.instagram.com/exatas_consultoria_digital/' target="_blank">
                            <InstagramIcon />
                        </a>
                    </div>
                    </>
                )}
            </div>
        </div>
        )
}