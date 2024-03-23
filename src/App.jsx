import React, { useState, useEffect } from "react";

import SmoothScroll from "smooth-scroll";
import "./styles/global.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'
import { useGlobal } from "./context/GlobalContext";



// Messages
import enMessages from './translations/en.json';
import ptMessages from './translations/pt-br.json';

const messages = {
  "en": enMessages,
  "pt-br": ptMessages
};

// ---------------- SET SCROLL SMOOTH
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const {locale} = useGlobal()
  console.log('testhg 1', locale)
  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale="pt-br">
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exatas" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
      </BrowserRouter>
    </IntlProvider>
    )
};

export default App;
