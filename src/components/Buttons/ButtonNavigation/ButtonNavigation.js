import './ButtonNavigation.css'
import { useState, useEffect } from 'react';


const ButtonNavigation= ({text, redirectTo}) => {

    return (
        <a 
        href={redirectTo}
        className={`button-navigation`}
        >
        {text}
      </a>
    )
}

export default ButtonNavigation