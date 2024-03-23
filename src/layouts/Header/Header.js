import React from "react";
import Logo from "../../components/Logo/Logo";
import './Header.css'
import ButtonContact from "../../components/Buttons/ButtonContact/ButtonContact";
import LocaleSelector from "../../components/LocaleSelector/LocaleSelector";



export default (props) => {
  return (
    <header id="header">
     <div className="header-container">
        <div className="header-container__localeselector">
          <LocaleSelector />
        </div>        
        <div className="header-container__logo">
          <Logo />
        </div>        
        <div className="header-container__contactbtn">
          <ButtonContact />
        </div>

     </div>
    </header>
  );
};
